import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/core/services/proyecto.service';
import { Proyecto } from 'src/app/core/models/proyecto.model';

@Component({
    selector: 'app-works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.css'],
    standalone: false
})
export class WorksComponent implements OnInit {
  worksList: Proyecto[] = [];
  loading = true;
  error = false;

  constructor(private readonly proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.listar().subscribe({
      next: (data) => {
        this.worksList = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
