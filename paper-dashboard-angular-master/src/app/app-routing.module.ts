import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';

// import { DashboardComponent } from './pages/PatientDashboard/dashboard/dashboard.component';
// import { BookingComponent } from './pages/PatientDashboard/booking/booking.component';
// import { CheckoutComponent } from './pages/PatientDashboard/checkout/checkout.component';
// import { BookingSuccessComponent } from './pages/PatientDashboard/booking-success/booking-success.component';
// import { DoctorProfileComponent } from './pages/PatientDashboard/doctor-profile/doctor-profile.component';
// import { ProfileComponent } from './pages/PatientDashboard/profile/profile.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'login', component: LoginComponent },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
   { path: 'register', component: RegisterComponent },
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
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'booking', component: BookingComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'success', component: BookingSuccessComponent },
  // { path: 'doctor-profile', component: DoctorProfileComponent },
  // { path: 'profile', component: ProfileComponent },
  //   { path: 'booking-success', component: BookingSuccessComponent },
  //   { path: 'appointments', component: AppointmentsComponent },
    //
    // {
    //     path: 'doctors',
    //     loadChildren: () => import('./pages/DoctorDashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
    //     // canActivate: [AuthGuard]
    // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
