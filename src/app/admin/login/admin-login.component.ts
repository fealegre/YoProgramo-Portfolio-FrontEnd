import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  standalone: false
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  submitting = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(): void {
    if (this.loginForm.invalid) return;
    this.submitting = true;
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: () => {
        this.toastr.success('Inicio de sesi\u00f3n exitoso', 'Bienvenido');
        this.router.navigate(['/admin']);
        this.submitting = false;
      },
      error: () => {
        this.toastr.error('Credenciales inv\u00e1lidas', 'Error');
        this.submitting = false;
      }
    });
  }
}
