import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '@app/@shared/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  user$: firebase.User | null = null;
  loading = true; // Activamos el spinner por defecto

  constructor(public auth: AngularFireAuth, private authService: AuthService) {
    this.auth.authState.subscribe((user) => {
      this.user$ = user;
      this.loading = false; // Desactivamos el spinner cuando tenemos la información del usuario
    });
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
}
