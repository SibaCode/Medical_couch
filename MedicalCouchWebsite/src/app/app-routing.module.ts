import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { PharmacyComponent } from './website/pharmacy/pharmacy.component';
import { DoctorComponent } from './website/doctor/doctor.component';;
import { PatientComponent } from './website/patient/patient.component';
import { LoginComponent } from './website/login/login.component';
import { RegisterComponent } from './website/register/register.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { PharmacyLayoutComponent } from './layouts/pharmacy-layout/pharmacy-layout.component';
const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'pharmacy-information' , component:PharmacyComponent},
  {path:'doctor-information' , component:DoctorComponent},
  {path:'patient-information' , component:PatientComponent},
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
        {  path: 'pharmacy',
             component: PharmacyLayoutComponent,
             children: [
                 {
               path: '',
               loadChildren: './layouts/pharmacy-layout/pharmacy-layout.module#PharmacyLayoutModule'
           }]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
