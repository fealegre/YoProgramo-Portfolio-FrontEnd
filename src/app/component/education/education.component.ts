import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/core/services/educacion.service';
import { Educacion } from 'src/app/core/models/educacion.model';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
    standalone: false
})
export class EducationComponent implements OnInit {
  eduList: Educacion[] = [];
  loading = true;
  error = false;

  constructor(private readonly educacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionService.listar().subscribe({
      next: (data) => {
        this.eduList = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
