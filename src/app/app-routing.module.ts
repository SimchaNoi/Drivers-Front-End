import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';
// import { LayoutComponent } from './vel/layouts/layout.component';

// Auth
import { AuthGuard } from './core/guards/auth.guard';
import { NewTravelComponent } from './pages/travels/new-travel/new-travel.component';
// import { AuthGuard } from './vel/core/guards/auth.guard';

const routes: Routes = [
  //my Project
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  // { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)  },
  // { path: 'pages', loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule), canActivate: [AuthGuard] },
  // { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},

  // velzon
  // { path: '', component: LayoutComponent, loadChildren: () => import('./vel/pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./vel/account/account.module').then(m => m.AccountModule)  },
  { path: 'pages', loadChildren: () => import('./vel/extraspages/extraspages.module').then(m => m.ExtraspagesModule), canActivate: [AuthGuard] },
  { path: 'landing', loadChildren: () => import('./vel/landing/landing.module').then(m => m.LandingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
