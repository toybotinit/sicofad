import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#SifoCadAuthModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
