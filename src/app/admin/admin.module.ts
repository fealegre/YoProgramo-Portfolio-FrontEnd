import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
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

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    PersonaEditComponent,
    ExperienciaListComponent,
    ExperienciaFormComponent,
    EducacionListComponent,
    EducacionFormComponent,
    ProyectoListComponent,
    ProyectoFormComponent,
    HabilidadListComponent,
    HabilidadFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
