import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/core/services/experiencia.service';
import { Experiencia } from 'src/app/core/models/experiencia.model';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.css'],
    standalone: false
})
export class JobsComponent implements OnInit {
  expList: Experiencia[] = [];
  loading = true;
  error = false;

  constructor(private readonly experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.listar().subscribe({
      next: (data) => {
        this.expList = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
