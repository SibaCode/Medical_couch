import { Routes } from '@angular/router';

import { AppointmentsComponent } from '../../pages/DoctorDashboard/appointments/appointments.component';
import { ProfileComponent } from '../../pages/DoctorDashboard/profile/profile.component';
import { PracticeProfileComponent } from '../../pages/DoctorDashboard/practice-profile/practice-profile.component';

export const DoctorLayoutRoutes: Routes = [
    { path: '',      component: AppointmentsComponent },
    { path: 'profile',      component: ProfileComponent },
    { path: 'practice-profile',      component: PracticeProfileComponent },

];
