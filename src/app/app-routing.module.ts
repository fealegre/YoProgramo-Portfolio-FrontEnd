import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RecuperarComponent } from './component/recuperar/recuperar.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { VerificarCorreoComponent } from './component/verificar-correo/verificar-correo.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'recuperar', component: RecuperarComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      anchorScrolling: 'enabled', // Habilita el scroll a fragmentos
      scrollPositionRestoration: 'enabled', // Restaura la posición de scroll al navegar hacia atrás/adelante
      scrollOffset: [0, 60]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
