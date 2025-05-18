import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/servicios/firebase-code-error.service';

@Component({
    selector: 'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css'],
    standalone: false
})
export class RegistrarComponent implements OnInit {
  //BINDEA CON FORMULARIO EN registrar.component.html
  registrarUsuario: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  //REGISTRAR USUARIO EN FIREBASE
  registrar() {
    const EMAIL = this.registrarUsuario.value.email;
    const PASSWORD = this.registrarUsuario.value.password;
    const REPETIRPASSWORD = this.registrarUsuario.value.repetirPassword;

    if (PASSWORD != REPETIRPASSWORD) {
      this.toastr.error('Los passwords deben ser iguales', 'Error!');
    } else {
      this.afAuth
        .createUserWithEmailAndPassword(EMAIL, PASSWORD)
        .then(() => {
          this.verificarCorreo();        
        })        
        .catch((error) => {
          console.log(error);
          this.toastr.error(this.firebaseError.codeError(error.code), 'Error!');
        });
    }
  }

  verificarCorreo(){
    this.afAuth.currentUser
    .then((user) => user?.sendEmailVerification())
    .then(() => {
      this.toastr.info('Le enviamos un email de verificación','Correcto!');
      this.router.navigate(['/login']);
    })

  }

  
}
