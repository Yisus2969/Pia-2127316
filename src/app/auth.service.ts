import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: { email: string, password: string }[] = [];
  private loggedIn = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  getCurrentUserEmail(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          resolve(user.email);
        } else {
          resolve(null); 
        }
      });
    });
  }

  register(email: string, password: string): Observable<boolean> {
    if (this.users.find(user => user.email === email)) {
      return of(false);
    }
    this.users.push({ email, password });
    return of(true);
  }

  login(email: string, password: string): Observable<boolean> {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.loggedIn = true;
      return of(true);
    }
    return of(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}