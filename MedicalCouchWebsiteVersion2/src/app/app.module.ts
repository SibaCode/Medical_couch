import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/login.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { PharmacyComponent } from './website/pharmacy/pharmacy.component';
import { DoctorComponent } from './website/doctor/doctor.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { ForgotPasswordComponent } from './website/forgot-password/forgot-password.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PharmacyLayoutComponent } from './layouts/pharmacy-layout/pharmacy-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PatientLayoutComponent,
    PharmacyComponent,
    DoctorComponent,
    DoctorLayoutComponent,
    ForgotPasswordComponent,
    PharmacyLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
