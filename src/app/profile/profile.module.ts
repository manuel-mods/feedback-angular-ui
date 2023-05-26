import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [ProfileComponent, WelcomeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProfileRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-circus' }),
  ],
})
export class ProfileModule {}
