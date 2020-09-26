import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientLayoutRoutes } from './patient-layout.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { BookingComponent } from './booking/booking.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PatientLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule

  ],
  declarations: [
    DashboardComponent,
    AppointmentsComponent,
    PrescriptionsComponent,
    ProfileComponent,
    DoctorProfileComponent,
    BookingComponent,
    

  ]
})

export class PatientLayoutModule {}
