import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PatientLayoutRoutes } from './patient-layout.routing';
// import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
// import { AppointmentsComponent } from '../../pages/PatientDashboard/appointments/appointments.component';
// import { ProfileComponent } from '../../pages/PatientDashboard/profile/profile.component';
// import { UserComponent }            from '../../pages/user/user.component';
// import { TableComponent }           from '../../pages/table/table.component';
// import { TypographyComponent }      from '../../pages/typography/typography.component';
// import { IconsComponent }           from '../../pages/icons/icons.component';
// import { MapsComponent }            from '../../pages/maps/maps.component';
// import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
// import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { PatientSidebarComponent } from './components/patient-sidebar/patient-sidebar.component';
// import { PatientNavbarComponent } from './components/patient-navbar/patient-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PatientLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    // DashboardComponent,
    // AppointmentsComponent,
    // ProfileComponent

    // PatientSidebarComponent,
    // PatientNavbarComponent,
    // UserComponent,
    // TableComponent,
    // UpgradeComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
  ]
})

export class PatientLayoutModule {}
