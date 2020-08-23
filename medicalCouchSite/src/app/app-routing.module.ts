import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/PatientDashboard/dashboard/dashboard.component';
import { BookingComponent } from './pages/PatientDashboard/booking/booking.component';
import { CheckoutComponent } from './pages/PatientDashboard/checkout/checkout.component';
import { BookingSuccessComponent } from './pages/PatientDashboard/booking-success/booking-success.component';
import { DoctorProfileComponent } from './pages/PatientDashboard/doctor-profile/doctor-profile.component';
import { ProfileComponent } from './pages/PatientDashboard/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: BookingSuccessComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
