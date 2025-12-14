import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  name:any;
  position:any;
  welcome_msg:any;
  mini_prof_bg:any;
  // miPortfolio: any;
  // persona: persona = new persona("","","");
  constructor(private readonly datosPortfolio:PortfolioService)
  // public personaService: PersonaService
  {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.name=data.name;
      this.position=data.position;
      this.welcome_msg=data.welcome_msg;
      this.mini_prof_bg=data.mini_prof_bg;
  })
    // this.personaService.getPersona().subscribe(data => {
    //   this.persona = data;
    //   console.log(this.persona);
    // });
    // this.datosPortfolio.obtenerDatos().subscribe(data => {
    //   this.miPortfolio = data;
    // });
  }
}
