import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/servicios/firebase-code-error.service';

@Component({
    selector: 'app-recuperar',
    templateUrl: './recuperar.component.html',
    styleUrls: ['./recuperar.component.css'],
    standalone: false
})
export class RecuperarComponent implements OnInit {
  recuperarUsuario: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    @Inject(AngularFireAuth)
    private afAuth: AngularFireAuth,
    @Inject(ToastrService)
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.recuperarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  recuperar() {
    const EMAIL = this.recuperarUsuario.value.email;

    this.afAuth
      .sendPasswordResetEmail(EMAIL)
      .then(() => {
        this.toastr.info(
          'Revise su email para resetear su password',
          'Correcto!'
        );
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error!');
      });
  }
}
