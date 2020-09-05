import { Routes } from '@angular/router';

import { AppointmentsComponent } from './appointments/appointments.component';
import { PracticeProfileComponent } from './practice-profile/practice-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
// import { ProfileComponent } from '../../pages/DoctorDashboard/profile/profile.component';
// import { PracticeProfileComponent } from '../../pages/DoctorDashboard/practice-profile/practice-profile.component';

export const DoctorLayoutRoutes: Routes = [
    { path: '',      component: AppointmentsComponent },
    { path: 'appointments',      component: AppointmentsComponent },
    { path: 'profile',      component: ProfileComponent },
    { path: 'practice-profile',      component: PracticeProfileComponent },
    { path: 'bookings',      component: BookingsComponent },
    // { path: 'profile',      component: ProfileComponent },
    // { path: 'practice-profile',      component: PracticeProfileComponent },

];
