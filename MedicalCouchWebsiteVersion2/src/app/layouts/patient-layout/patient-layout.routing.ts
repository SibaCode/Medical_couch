import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
// import { BookingComponent } from '../../pages/PatientDashboard/booking/booking.component';
// import { AppointmentsComponent } from '../../pages/PatientDashboard/appointments/appointments.component';
import { ProfileComponent } from './profile/profile.component';
// import { TableComponent } from '../../pages/table/table.component';
// import { TypographyComponent } from '../../pages/typography/typography.component';
// import { IconsComponent } from '../../pages/icons/icons.component';
// import { MapsComponent } from '../../pages/maps/maps.component';
// import { NotificationsComponent } from '../../pages/notifications/notifications.component';
// import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const PatientLayoutRoutes: Routes = [
  { path: '',      component: DashboardComponent },

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'appointments',      component: AppointmentsComponent },
    { path: 'prescriptions',      component: PrescriptionsComponent },
    // { path: 'booking',           component: BookingComponent },
    // { path: 'appointments',          component: AppointmentsComponent },
    { path: 'profile',     component: ProfileComponent},
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
