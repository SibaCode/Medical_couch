import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/PatientDashboard/dashboard/dashboard.component';

import { ProfileComponent } from '../../pages/PatientDashboard/profile/profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',   component: ProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
];
