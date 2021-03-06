import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PharmacyLayoutRoutes } from './pharmacy-layout.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AppointmentsComponent } from './appointments/appointments.component';
// import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { ProfileComponent } from './profile/profile.component';
// import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
// import { BookingComponent } from './booking/booking.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PharmacyLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    // NgbModule
  ],
  declarations: [
    DashboardComponent,
    // AppointmentsComponent,
    // PrescriptionsComponent,
    ProfileComponent,
    // DoctorProfileComponent,
    // BookingComponent,

  ]
})

export class PharmacyLayoutModule {}
