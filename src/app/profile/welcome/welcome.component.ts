import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(public auth: AngularFireAuth, private fb: FormBuilder) {}
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
    country: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.form.get('email');
  }
  get username() {
    return this.form.get('username');
  }
  get fullName() {
    return this.form.get('fullName');
  }
  get phone() {
    return this.form.get('phone');
  }
  get country() {
    return this.form.get('country');
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
  ngOnInit(): void {}
}
