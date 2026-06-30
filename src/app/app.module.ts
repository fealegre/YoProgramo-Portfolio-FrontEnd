// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';

// COMPONENTS
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { WorksComponent } from './component/works/works.component';
import { ContactComponent } from './component/contact/contact.component';
import { EducationComponent } from './component/education/education.component';
import { SkillsComponent } from './component/skills/skills.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrarComponent } from './component/registrar/registrar.component';
import { RecuperarComponent } from './component/recuperar/recuperar.component';
import { VerificarCorreoComponent } from './component/verificar-correo/verificar-correo.component';
import { HeaderBarComponent } from './component/header-bar/header-bar.component';

// SERVICES
import { AuthService } from './service/auth.service';
import { DataService } from './service/data.service';

const firebaseConfig = environment.firebaseConfig;

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
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({            
      radius: 40,
      maxPercent: 100,            
      subtitleColor: "#444444",
      showInnerStroke: true,            
      animationDuration: 600,
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ToastrModule.forRoot()],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),]
})
export class AppModule { }
