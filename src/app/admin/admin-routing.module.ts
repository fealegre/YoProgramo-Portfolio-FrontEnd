import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminLoginComponent } from './login/admin-login.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { PersonaEditComponent } from './persona/persona-edit.component';
import { ExperienciaListComponent } from './experiencia/experiencia-list.component';
import { ExperienciaFormComponent } from './experiencia/experiencia-form.component';
import { EducacionListComponent } from './educacion/educacion-list.component';
import { EducacionFormComponent } from './educacion/educacion-form.component';
import { ProyectoListComponent } from './proyecto/proyecto-list.component';
import { ProyectoFormComponent } from './proyecto/proyecto-form.component';
import { HabilidadListComponent } from './habilidad/habilidad-list.component';
import { HabilidadFormComponent } from './habilidad/habilidad-form.component';

const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  { path: '', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'persona', component: PersonaEditComponent, canActivate: [AuthGuard] },
  { path: 'experiencia', component: ExperienciaListComponent, canActivate: [AuthGuard] },
  { path: 'experiencia/nueva', component: ExperienciaFormComponent, canActivate: [AuthGuard] },
  { path: 'experiencia/editar/:id', component: ExperienciaFormComponent, canActivate: [AuthGuard] },
  { path: 'educacion', component: EducacionListComponent, canActivate: [AuthGuard] },
  { path: 'educacion/nueva', component: EducacionFormComponent, canActivate: [AuthGuard] },
  { path: 'educacion/editar/:id', component: EducacionFormComponent, canActivate: [AuthGuard] },
  { path: 'proyectos', component: ProyectoListComponent, canActivate: [AuthGuard] },
  { path: 'proyectos/nuevo', component: ProyectoFormComponent, canActivate: [AuthGuard] },
  { path: 'proyectos/editar/:id', component: ProyectoFormComponent, canActivate: [AuthGuard] },
  { path: 'habilidades', component: HabilidadListComponent, canActivate: [AuthGuard] },
  { path: 'habilidades/nueva', component: HabilidadFormComponent, canActivate: [AuthGuard] },
  { path: 'habilidades/editar/:id', component: HabilidadFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
