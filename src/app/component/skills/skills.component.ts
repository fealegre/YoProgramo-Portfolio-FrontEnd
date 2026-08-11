import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/core/services/habilidad.service';
import { Habilidad } from 'src/app/core/models/habilidad.model';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: false
})
export class SkillsComponent implements OnInit {
  habilidades: Habilidad[] = [];
  loading = true;
  error = false;

  get categorias(): string[] {
    return [...new Set(this.habilidades.map(h => h.categoria || 'General'))];
  }

  getHabilidadesPorCategoria(categoria: string): Habilidad[] {
    return this.habilidades.filter(h => (h.categoria || 'General') === categoria);
  }

  getStrokeColor(porcentaje: number): string {
    if (porcentaje >= 80) return '#28a745';
    if (porcentaje >= 60) return '#007bff';
    if (porcentaje >= 40) return '#ffc107';
    return '#dc3545';
  }

  constructor(private readonly habilidadService: HabilidadService) { }

  ngOnInit(): void {
    this.habilidadService.listar().subscribe({
      next: (data) => {
        this.habilidades = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
