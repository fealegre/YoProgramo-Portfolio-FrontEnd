import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { WorksComponent } from './componentes/works/works.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { JobsComponent } from './componentes/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent, WorksComponent, ContactComponent, EducationComponent, SkillsComponent, JobsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
