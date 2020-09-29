import { Routes } from '@angular/router';

import { AppointmentsComponent } from './appointments/appointments.component';
import { PracticeProfileComponent } from './practice-profile/practice-profile.component';
import { ProfileComponent } from './profile/profile.component';
// import { BookingsComponent } from './bookings/bookings.component';
// import { ProfileComponent } from '../../pages/DoctorDashboard/profile/profile.component';
// import { PracticeProfileComponent } from '../../pages/DoctorDashboard/practice-profile/practice-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { DoctorCalendarComponent } from './doctor-calendar/doctor-calendar.component';

export const DoctorLayoutRoutes: Routes = [
    { path: '',      component: AppointmentsComponent },
    { path: 'appointments',      component: AppointmentsComponent },
    { path: 'profile',      component: ProfileComponent },
    { path: 'practice-profile',      component: PracticeProfileComponent },
    { path: 'payment', component: PaymentComponent},
    { path: 'payment/success' , component: SuccessComponent},
    { path: 'calendar' , component: DoctorCalendarComponent}

    // { path: 'bookings',      component: BookingsComponent },
    // { path: 'profile',      component: ProfileComponent },
    // { path: 'practice-profile',      component: PracticeProfileComponent },

];
