import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
    selector: 'app-works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.css'],
    standalone: false
})
export class WorksComponent implements OnInit {
  worksList:any;
  constructor(private readonly datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.worksList=data.works;
    })
  }

}
