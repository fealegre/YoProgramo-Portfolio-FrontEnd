import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css'],
    standalone: false
})
export class HeaderBarComponent implements OnInit {

  constructor(
    private readonly afAuth: AngularFireAuth,
    private readonly route: Router
  ) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  isLoggedIn(): boolean {
    return !!this.afAuth.user;
  }

  login() {
    this.route.navigate(['/login']);
  }

  logout(){
    this.afAuth.signOut();
    this.route.navigate(['/home']);
  }

}
