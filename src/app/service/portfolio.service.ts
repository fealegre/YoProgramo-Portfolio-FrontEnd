import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private readonly dataService: DataService) { }

  getPortfolio(): Observable<any> {
    return this.dataService.getPortfolio();
  }

  obtenerDatos(): Observable<any> {
    return this.dataService.getPortfolio();
  }
}
