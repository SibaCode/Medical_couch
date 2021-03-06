import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentsComponent } from './appointments/appointments.component';

import { DoctorLayoutRoutes } from './doctor-layout.routing';
import { PracticeProfileComponent } from './practice-profile/practice-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
// import { CalendarComponent } from './calendar/calendar.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';


@NgModule({
  declarations: [AppointmentsComponent, PracticeProfileComponent, ProfileComponent, PaymentComponent, SuccessComponent , DoctorCalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorLayoutRoutes),
    FormsModule,
    // NgbModule
  ]
})
export class DoctorLayoutModule { }
