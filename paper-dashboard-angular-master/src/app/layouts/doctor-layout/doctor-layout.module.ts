import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DoctorLayoutRoutes } from './doctor-layout.routing';
// import { DoctorSidebarComponent } from './components/doctor-sidebar/doctor-sidebar.component';
// import { DoctorNavbarComponent } from './components/doctor-navbar/doctor-navbar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorLayoutRoutes),
    FormsModule,
    NgbModule
  ]
})
export class DoctorLayoutModule { }
