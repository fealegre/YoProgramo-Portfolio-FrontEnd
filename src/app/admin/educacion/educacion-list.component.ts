import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/core/services/educacion.service';
import { Educacion } from 'src/app/core/models/educacion.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-educacion-list',
  templateUrl: './educacion-list.component.html',
  styleUrls: ['./educacion-list.component.css'],
  standalone: false
})
export class EducacionListComponent implements OnInit {
  educaciones: Educacion[] = [];
  loading = true;

  constructor(private readonly educacionService: EducacionService, private readonly toastr: ToastrService) { }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.educacionService.listar().subscribe({
      next: (data) => { this.educaciones = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  delete(id: number): void {
    if (confirm('\u00bfEliminar esta educaci\u00f3n?')) {
      this.educacionService.borrar(id).subscribe({
        next: () => { this.toastr.success('Eliminado correctamente'); this.load(); },
        error: () => this.toastr.error('Error al eliminar', 'Error')
      });
    }
  }
}
