import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Habilidad } from '../models/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private readonly apiUrl = `${environment.apiUrl}/habilidades`;

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(`${this.apiUrl}/listar`);
  }

  detail(id: number): Observable<Habilidad> {
    return this.http.get<Habilidad>(`${this.apiUrl}/detail/${id}`);
  }

  crear(habilidad: Habilidad): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, habilidad);
  }

  editar(id: number, habilidad: Habilidad): Observable<any> {
    return this.http.put(`${this.apiUrl}/editar/${id}`, habilidad);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/borrar/${id}`);
  }
}
