import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/core/services/experiencia.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.css'],
  standalone: false
})
export class ExperienciaFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  editId: number | null = null;
  loading = false;
  saving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly experienciaService: ExperienciaService,
    private readonly toastr: ToastrService
  ) {
    this.form = this.fb.group({
      logoE: ['', Validators.maxLength(500)],
      nombreE: ['', [Validators.required, Validators.maxLength(100)]],
      descripcionE: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.loading = true;
      this.experienciaService.detail(this.editId).subscribe({
        next: (data) => { this.form.patchValue(data); this.loading = false; },
        error: () => { this.loading = false; this.toastr.error('Error al cargar'); }
      });
    }
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const experiencia = this.form.value;
    const action = this.isEdit && this.editId
      ? this.experienciaService.editar(this.editId, experiencia)
      : this.experienciaService.crear(experiencia);

    action.subscribe({
      next: () => {
        this.toastr.success(this.isEdit ? 'Actualizado' : 'Creado');
        this.saving = false;
        this.router.navigate(['/admin/experiencia']);
      },
      error: () => {
        this.toastr.error('Error al guardar', 'Error');
        this.saving = false;
      }
    });
  }
}
