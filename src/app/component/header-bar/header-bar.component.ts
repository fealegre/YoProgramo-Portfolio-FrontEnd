import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css'],
    standalone: false
})
export class HeaderBarComponent {

  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  goToAdmin() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/admin/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
