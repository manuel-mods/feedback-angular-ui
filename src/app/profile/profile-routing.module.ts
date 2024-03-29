import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ProfileComponent } from './profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: ProfileComponent, data: { title: marker('Profile') } },
  { path: 'welcome', component: WelcomeComponent, data: { title: marker('Profile') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
