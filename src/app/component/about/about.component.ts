import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Persona } from 'src/app/core/models/persona.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent implements OnInit {
  persona: Persona | null = null;
  loading = true;
  error = false;

  constructor(private readonly personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPerfil().subscribe({
      next: (data) => {
        this.persona = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
