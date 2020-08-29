import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'test',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '',
    component: PatientLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/patient-layout/patient-layout.module#PatientLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
