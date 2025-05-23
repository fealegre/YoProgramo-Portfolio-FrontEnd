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
    private afAuth: AngularFireAuth,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.afAuth.signOut();
    this.route.navigate(['/login']);
  }

}
