import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/core/services/experiencia.service';
import { Experiencia } from 'src/app/core/models/experiencia.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiencia-list',
  templateUrl: './experiencia-list.component.html',
  styleUrls: ['./experiencia-list.component.css'],
  standalone: false
})
export class ExperienciaListComponent implements OnInit {
  experiencias: Experiencia[] = [];
  loading = true;

  constructor(
    private readonly experienciaService: ExperienciaService,
    private readonly toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.experienciaService.listar().subscribe({
      next: (data) => { this.experiencias = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  delete(id: number): void {
    if (confirm('\u00bfEliminar esta experiencia?')) {
      this.experienciaService.borrar(id).subscribe({
        next: () => { this.toastr.success('Eliminado correctamente'); this.load(); },
        error: () => this.toastr.error('Error al eliminar', 'Error')
      });
    }
  }
}
