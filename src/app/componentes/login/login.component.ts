import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/servicios/firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })      
  }

  ngOnInit(): void {
  }

  login(){

    const EMAIL = this.loginUsuario.value.email;
    const PASSWORD = this.loginUsuario.value.password;

    this.afAuth.signInWithEmailAndPassword(EMAIL,PASSWORD)
    .then((user)=>{
      console.log(user);
      if (user.user?.emailVerified){
        this.toastr.success('Se ha dado acceso al usuario','Correcto!');
        this.router.navigate(['/home']);        
      } else {
        this.router.navigate(['/verificar-correo']);
      }
      
    })
    .catch((error)=>{
      this.toastr.error(this.firebaseError.codeError(error.code),'Error!');      
    })

  }

}
