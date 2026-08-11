import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/core/services/educacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-educacion-form',
  templateUrl: './educacion-form.component.html',
  styleUrls: ['./educacion-form.component.css'],
  standalone: false
})
export class EducacionFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  editId: number | null = null;
  loading = false;
  saving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly educacionService: EducacionService,
    private readonly toastr: ToastrService
  ) {
    this.form = this.fb.group({
      institucion: ['', [Validators.required, Validators.maxLength(200)]],
      titulo: ['', [Validators.required, Validators.maxLength(200)]],
      logoUrl: ['', Validators.maxLength(500)],
      fechaInicio: ['', Validators.maxLength(20)],
      fechaFin: ['', Validators.maxLength(20)]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.loading = true;
      this.educacionService.detail(this.editId).subscribe({
        next: (data) => { this.form.patchValue(data); this.loading = false; },
        error: () => { this.loading = false; this.toastr.error('Error al cargar'); }
      });
    }
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const action = this.isEdit && this.editId
      ? this.educacionService.editar(this.editId, this.form.value)
      : this.educacionService.crear(this.form.value);
    action.subscribe({
      next: () => {
        this.toastr.success(this.isEdit ? 'Actualizado' : 'Creado');
        this.saving = false;
        this.router.navigate(['/admin/educacion']);
      },
      error: () => { this.toastr.error('Error al guardar', 'Error'); this.saving = false; }
    });
  }
}
