import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoctorLayoutRoutes } from './doctor-layout.routing';
import { DashboardComponent } from '../../pages/DoctorDashboard/dashboard/dashboard.component';
import { ProfileComponent } from '../../pages/DoctorDashboard/profile/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent
  ]
  imports: [
    CommonModule,
      RouterModule.forChild(AdminLayoutRoutes),
      FormsModule,
      HttpClientModule,
  ]
})
export class DoctorLayoutModule { }
