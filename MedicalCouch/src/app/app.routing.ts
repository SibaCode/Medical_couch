import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { PharmacyComponent } from './pages/pharmacy/pharmacy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'doctor', component: DoctorComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'pharmacy', component: PharmacyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
