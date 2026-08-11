import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Persona } from 'src/app/core/models/persona.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css'],
  standalone: false
})
export class PersonaEditComponent implements OnInit {
  personaForm: FormGroup;
  selectedId: number | null = null;
  loading = true;
  saving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly personaService: PersonaService,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {
    this.personaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      apellido: ['', [Validators.required, Validators.maxLength(50)]],
      titulo: ['', Validators.maxLength(100)],
      bio: ['', Validators.maxLength(1000)],
      img: ['', Validators.maxLength(500)],
      email: ['', [Validators.email, Validators.maxLength(100)]],
      linkedinUrl: ['', Validators.maxLength(500)],
      githubUrl: ['', Validators.maxLength(500)],
      ubicacion: ['', Validators.maxLength(200)]
    });
  }

  ngOnInit(): void {
    this.personaService.listar().subscribe({
      next: (data) => {
        if (data.length > 0) {
          const p = data[0];
          this.selectedId = p.id || null;
          this.personaForm.patchValue(p);
        }
        this.loading = false;
      },
      error: () => { this.loading = false; this.toastr.error('Error al cargar datos', 'Error'); }
    });
  }

  save(): void {
    if (this.personaForm.invalid) return;
    this.saving = true;
    const persona: Persona = this.personaForm.value;

    const action = this.selectedId
      ? this.personaService.editar(this.selectedId, persona)
      : this.personaService.crear(persona);

    action.subscribe({
      next: () => {
        this.toastr.success('Datos guardados correctamente', 'OK');
        this.saving = false;
        this.router.navigate(['/admin']);
      },
      error: () => {
        this.toastr.error('Error al guardar', 'Error');
        this.saving = false;
      }
    });
  }
}
