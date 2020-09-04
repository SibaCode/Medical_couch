import { Routes ,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // }, {
  //   path: 'test',
  //   component: AdminLayoutComponent,
  //   children: [
  //       {
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  // }]},
  // {
  //   path: '',
  //   component: PatientLayoutComponent,
  //   children: [
  //       {
  //     path: '',
  //     loadChildren: './layouts/patient-layout/patient-layout.module#PatientLayoutModule'
  // }]},
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
]
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
