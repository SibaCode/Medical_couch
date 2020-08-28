import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/DoctorDashboard/dashboard/dashboard.component';

import { ProfileComponent } from '../../pages/DoctorDashboard/profile/profile.component';

export const DoctorLayoutRoutes: Routes = [
    { path: '',      component: DashboardComponent },
    { path: 'profile',   component: ProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
];
