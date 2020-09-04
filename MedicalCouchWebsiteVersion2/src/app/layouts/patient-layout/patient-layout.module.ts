import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientLayoutRoutes } from './patient-layout.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PatientLayoutRoutes),
    FormsModule,
    // NgbModule
  ],
  declarations: [
    DashboardComponent,
    AppointmentsComponent,
    PrescriptionsComponent,
  
  ]
})

export class PatientLayoutModule {}
