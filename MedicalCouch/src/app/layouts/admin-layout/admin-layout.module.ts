import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/PatientDashboard/dashboard/dashboard.component';
import { ProfileComponent } from '../../pages/PatientDashboard/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    // NgbModule,
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent

  ]
})

export class AdminLayoutModule {}
