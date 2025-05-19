import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
  dataUser: any;
  constructor(
    @Inject(AngularFireAuth)
    private afAuth: AngularFireAuth,
    private router:Router
  ) { }

  ngOnInit(): void {
    
    this.afAuth.currentUser.then((user) =>{
      if (user){        
        this.dataUser = user;
      } else {
        this.router.navigate(['/login']);

      }
    })
  }

}
