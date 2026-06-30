import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false
})
export class AboutComponent implements OnInit {
  name: any;
  position: any;
  welcome_msg: any;

  constructor(private readonly datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.name = data.name;
      this.position = data.position;
      this.welcome_msg = data.welcome_msg;
    });
  }
}
