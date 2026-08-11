import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private readonly apiUrl = `${environment.apiUrl}/persona`;

  constructor(private readonly http: HttpClient) { }

  getPerfil(): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/perfil`);
  }

  listar(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/listar`);
  }

  crear(persona: Persona): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, persona);
  }

  editar(id: number, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/editar/${id}`, persona);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/borrar/${id}`);
  }
}
