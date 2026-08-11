import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadService } from 'src/app/core/services/habilidad.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-habilidad-form',
  templateUrl: './habilidad-form.component.html',
  styleUrls: ['./habilidad-form.component.css'],
  standalone: false
})
export class HabilidadFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  editId: number | null = null;
  loading = false;
  saving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly habilidadService: HabilidadService,
    private readonly toastr: ToastrService
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      porcentaje: [50, [Validators.required, Validators.min(0), Validators.max(100)]],
      categoria: ['', Validators.maxLength(100)],
      orden: [0]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.loading = true;
      this.habilidadService.detail(this.editId).subscribe({
        next: (data) => { this.form.patchValue(data); this.loading = false; },
        error: () => { this.loading = false; this.toastr.error('Error al cargar'); }
      });
    }
  }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const action = this.isEdit && this.editId
      ? this.habilidadService.editar(this.editId, this.form.value)
      : this.habilidadService.crear(this.form.value);
    action.subscribe({
      next: () => {
        this.toastr.success(this.isEdit ? 'Actualizado' : 'Creado');
        this.saving = false;
        this.router.navigate(['/admin/habilidades']);
      },
      error: () => { this.toastr.error('Error al guardar', 'Error'); this.saving = false; }
    });
  }
}
