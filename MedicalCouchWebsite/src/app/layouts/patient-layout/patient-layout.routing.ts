import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

export const PatientLayoutRoutes: Routes = [
  { path: '',      component: DashboardComponent },

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'appointments',      component: AppointmentsComponent },
    { path: 'prescriptions',      component: PrescriptionsComponent },
    // { path: 'booking',           component: BookingComponent },
    // { path: 'appointments',          component: AppointmentsComponent },
    { path: 'profile',     component: ProfileComponent},
    { path: 'doctor-profile/:id',     component: DoctorProfileComponent},

    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
