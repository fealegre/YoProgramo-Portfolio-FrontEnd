import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  //styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  worksList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.worksList=data.works;
    })
  }

}
