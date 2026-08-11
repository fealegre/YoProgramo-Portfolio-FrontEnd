import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PersonaService } from 'src/app/core/services/persona.service';
import { ExperienciaService } from 'src/app/core/services/experiencia.service';
import { EducacionService } from 'src/app/core/services/educacion.service';
import { ProyectoService } from 'src/app/core/services/proyecto.service';
import { HabilidadService } from 'src/app/core/services/habilidad.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: false
})
export class AdminDashboardComponent implements OnInit {
  counts: any = { persona: 0, experiencia: 0, educacion: 0, proyectos: 0, habilidades: 0 };

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly personaService: PersonaService,
    private readonly experienciaService: ExperienciaService,
    private readonly educacionService: EducacionService,
    private readonly proyectoService: ProyectoService,
    private readonly habilidadService: HabilidadService
  ) { }

  ngOnInit(): void {
    this.personaService.listar().subscribe(d => this.counts.persona = d.length);
    this.experienciaService.listar().subscribe(d => this.counts.experiencia = d.length);
    this.educacionService.listar().subscribe(d => this.counts.educacion = d.length);
    this.proyectoService.listar().subscribe(d => this.counts.proyectos = d.length);
    this.habilidadService.listar().subscribe(d => this.counts.habilidades = d.length);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
