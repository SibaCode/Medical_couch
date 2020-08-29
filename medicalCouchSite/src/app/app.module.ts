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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
