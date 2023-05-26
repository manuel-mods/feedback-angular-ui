import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  Shell.childRoutes([
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
      canActivate: [AngularFireAuthGuard],
    },
  ]),
  // Fallback when no prior route is matched
  { path: 'feedback', loadChildren: () => import('./feedback/feedback.module').then((m) => m.FeedbackModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
