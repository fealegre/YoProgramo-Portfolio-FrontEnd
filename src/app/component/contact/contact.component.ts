import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Persona } from 'src/app/core/models/persona.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent implements OnInit {
  persona: Persona | null = null;
  loading = true;

  constructor(private readonly personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPerfil().subscribe({
      next: (data) => {
        this.persona = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
