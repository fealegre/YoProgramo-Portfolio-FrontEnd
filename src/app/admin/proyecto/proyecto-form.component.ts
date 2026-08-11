import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/core/services/proyecto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.css'],
  standalone: false
})
export class ProyectoFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  editId: number | null = null;
  loading = false;
  saving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly proyectoService: ProyectoService,
    private readonly toastr: ToastrService
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(200)]],
      descripcion: ['', Validators.maxLength(2000)],
      tecnologias: ['', Validators.maxLength(500)],
      urlGithub: ['', Validators.maxLength(500)],
      urlDemo: ['', Validators.maxLength(500)],
      imagenUrl: ['', Validators.maxLength(500)],
      orden: [0]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.loading = true;
      this.proyectoService.detail(this.editId).subscribe({
        next: (data) => { this.form.patchValue(data); this.loading = false; },
        error: () => { this.loading = false; this.toastr.error('Error al cargar'); }
      });
    }
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const action = this.isEdit && this.editId
      ? this.proyectoService.editar(this.editId, this.form.value)
      : this.proyectoService.crear(this.form.value);
    action.subscribe({
      next: () => {
        this.toastr.success(this.isEdit ? 'Actualizado' : 'Creado');
        this.saving = false;
        this.router.navigate(['/admin/proyectos']);
      },
      error: () => { this.toastr.error('Error al guardar', 'Error'); this.saving = false; }
    });
  }
}
