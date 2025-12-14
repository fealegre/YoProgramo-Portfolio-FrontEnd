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
<<<<<<< HEAD:src/app/component/home/home.component.ts
    private readonly afAuth: AngularFireAuth,
    private readonly router:Router
=======
    @Inject(AngularFireAuth)
    private afAuth: AngularFireAuth,
    private router:Router
>>>>>>> 91d4cd61de20f43e282110d14c1662fffe178b9e:src/app/componentes/home/home.component.ts
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
