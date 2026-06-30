import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RecuperarComponent } from './component/recuperar/recuperar.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { VerificarCorreoComponent } from './component/verificar-correo/verificar-correo.component';
import { AboutComponent } from './component/about/about.component';
import { WorksComponent } from './component/works/works.component';
import { EducationComponent } from './component/education/education.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ContactComponent } from './component/contact/contact.component';
import { JobsComponent } from './component/jobs/jobs.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'works', component: WorksComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'jobs', component: JobsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 60]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
