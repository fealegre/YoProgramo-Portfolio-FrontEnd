import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loggedIn = new BehaviorSubject<boolean>(false);
  private readonly userRole = new BehaviorSubject<string | null>(null);

  constructor() { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get role() {
    return this.userRole.asObservable();
  }

  login(role: string) {
    this.loggedIn.next(true);
    this.userRole.next(role);
  }

  logout() {
    this.loggedIn.next(false);
    this.userRole.next(null);
  }
}
