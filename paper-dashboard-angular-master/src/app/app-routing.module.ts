import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { DoctorInfoComponent } from './pages/doctor-info/doctor-info.component';
import { PatientInfoComponent } from './pages/patient-info/patient-info.component';
import { PharmacyInfoComponent } from './pages/pharmacy-info/pharmacy-info.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'doctor-info', component: DoctorInfoComponent },
   { path: 'patient-info', component: PatientInfoComponent },
   { path: 'pharmacy-info', component: PharmacyInfoComponent },
  {  path: 'patient',
     component: PatientLayoutComponent,
     children: [
         {
       path: '',
       loadChildren: './layouts/patient-layout/patient-layout.module#PatientLayoutModule'
   }]},
   {  path: 'doctor',
      component: DoctorLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './layouts/doctor-layout/doctor-layout.module#DoctorLayoutModule'
    }]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
