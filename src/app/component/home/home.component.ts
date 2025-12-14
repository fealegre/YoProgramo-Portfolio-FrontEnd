import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataUser: any;
  constructor(
    private readonly afAuth: AngularFireAuth,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    
    this.afAuth.currentUser.then((user) =>{
      if (user){        
        this.dataUser = user;
        console.log(this.dataUser);
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

}
