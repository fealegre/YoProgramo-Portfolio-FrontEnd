import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private readonly apiUrl = `${environment.apiUrl}/proyectos`;

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiUrl}/listar`);
  }

  detail(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.apiUrl}/detail/${id}`);
  }

  crear(proyecto: Proyecto): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, proyecto);
  }

  editar(id: number, proyecto: Proyecto): Observable<any> {
    return this.http.put(`${this.apiUrl}/editar/${id}`, proyecto);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/borrar/${id}`);
  }
}
