import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AppointmentsComponent } from './pages/PatientDashboard/appointments/appointments.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    DashboardComponent,
    BookingComponent,
    CheckoutComponent,
    BookingSuccessComponent,
    DoctorProfileComponent,
    ProfileComponent,
    HomeComponent,
    AppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
