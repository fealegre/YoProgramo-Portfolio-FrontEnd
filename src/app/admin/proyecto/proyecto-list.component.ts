import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/core/services/proyecto.service';
import { Proyecto } from 'src/app/core/models/proyecto.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html',
  styleUrls: ['./proyecto-list.component.css'],
  standalone: false
})
export class ProyectoListComponent implements OnInit {
  proyectos: Proyecto[] = [];
  loading = true;

  constructor(private readonly proyectoService: ProyectoService, private readonly toastr: ToastrService) { }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.proyectoService.listar().subscribe({
      next: (data) => { this.proyectos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  delete(id: number): void {
    if (confirm('\u00bfEliminar este proyecto?')) {
      this.proyectoService.borrar(id).subscribe({
        next: () => { this.toastr.success('Eliminado correctamente'); this.load(); },
        error: () => this.toastr.error('Error al eliminar', 'Error')
      });
    }
  }
}
