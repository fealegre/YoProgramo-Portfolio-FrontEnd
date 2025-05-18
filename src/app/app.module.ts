// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

// COMPONENTS
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { WorksComponent } from './componentes/works/works.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { JobsComponent } from './componentes/jobs/jobs.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { VerificarCorreoComponent } from './componentes/verificar-correo/verificar-correo.component';
import { HeaderBarComponent } from './componentes/header-bar/header-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        WorksComponent,
        ContactComponent,
        EducationComponent,
        SkillsComponent,
        JobsComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RegistrarComponent,
        RecuperarComponent,
        VerificarCorreoComponent,
        HeaderBarComponent,
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        BrowserAnimationsModule, // required animations module
        NgCircleProgressModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        ToastrModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
