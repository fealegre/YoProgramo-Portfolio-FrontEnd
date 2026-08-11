import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/core/services/habilidad.service';
import { Habilidad } from 'src/app/core/models/habilidad.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-habilidad-list',
  templateUrl: './habilidad-list.component.html',
  styleUrls: ['./habilidad-list.component.css'],
  standalone: false
})
export class HabilidadListComponent implements OnInit {
  habilidades: Habilidad[] = [];
  loading = true;

  constructor(private readonly habilidadService: HabilidadService, private readonly toastr: ToastrService) { }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.habilidadService.listar().subscribe({
      next: (data) => { this.habilidades = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  delete(id: number): void {
    if (confirm('\u00bfEliminar esta habilidad?')) {
      this.habilidadService.borrar(id).subscribe({
        next: () => { this.toastr.success('Eliminado correctamente'); this.load(); },
        error: () => this.toastr.error('Error al eliminar', 'Error')
      });
    }
  }
}
