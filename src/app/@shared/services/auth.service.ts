import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | null>;
  userLocal: any;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
    this.afAuth.authState.subscribe((user) => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
    });
    if (localStorage.getItem('user')) {
      this.userLocal = JSON.parse(localStorage.getItem('user') || '{}');
    }
  }

  login() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.signOut();
  }

  // Este método devuelve los detalles del usuario actual
  getCurrentUser() {
    return this.user$;
  }
}
