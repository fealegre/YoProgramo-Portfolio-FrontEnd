import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
