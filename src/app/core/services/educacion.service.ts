import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private readonly apiUrl = `${environment.apiUrl}/educacion`;

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiUrl}/listar`);
  }

  detail(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.apiUrl}/detail/${id}`);
  }

  crear(educacion: Educacion): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, educacion);
  }

  editar(id: number, educacion: Educacion): Observable<any> {
    return this.http.put(`${this.apiUrl}/editar/${id}`, educacion);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/borrar/${id}`);
  }
}
