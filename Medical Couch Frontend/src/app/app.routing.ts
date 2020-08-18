import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
//
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { PharmacyComponent } from './pages/pharmacy/pharmacy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// import { DashboardComponent } from './pages/patientDashboard/dashboard/dashboard.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'second', component: SecondComponent },
  { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent },
   { path: 'doctor', component: DoctorComponent },
   { path: 'patient', component: PatientComponent },
   { path: 'pharmacy', component: PharmacyComponent },
   { path: 'contact', component: ContactComponent },
  //{ path: 'patient-dashboard',component: PatientDashboardComponent,canActivate: [AuthGuard]},
   { path: 'login', component: LoginComponent   },
   { path: 'register', component: RegisterComponent   },

    // { path: 'patient-dashboard', component: DashboardComponent   },
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
      }, {
        path: '',
        component: AuthLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
          }
        ]
      },
];
// const routes: Routes =[
// {  path: '',
//   component: HomeComponent},
//   {
//     path: 'dashboard',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//   }, {
//     path: '',
//     component: AdminLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
//       }
//     ]
//   }, {
//     path: '',
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
//       }
//     ]
//   }, {
//     path: '**',
//     redirectTo: 'dashboard'
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
