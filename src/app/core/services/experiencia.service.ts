import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private readonly apiUrl = `${environment.apiUrl}/explab`;

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiUrl}/listar`);
  }

  detail(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.apiUrl}/detail/${id}`);
  }

  crear(experiencia: Experiencia): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, experiencia);
  }

  editar(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put(`${this.apiUrl}/editar/${id}`, experiencia);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/borrar/${id}`);
  }
}
