import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './layouts/admin-layout/components/sidebar/sidebar.module';
import { PatientSidebarModule} from './layouts/patient-layout/components/patient-sidebar/patient-sidebar.module';
import { DoctorSidebarModule} from './layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.module';

import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './layouts/patient-layout/components/navbar/navbar.module';
import { PatientNavbarModule} from './layouts/patient-layout/components/patient-navbar/patient-navbar.module';
import { DoctorNavbarModule} from './layouts/doctor-layout/components/doctor-navbar/doctor-navbar.module';

import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
// import { AppRoutes } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { DashboardComponent } from './pages/PatientDashboard/dashboard/dashboard.component';
import { BookingComponent } from './pages/PatientDashboard/booking/booking.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentsComponent } from './pages/PatientDashboard/appointments/appointments.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './pages/PatientDashboard/profile/profile.component';
import { PracticeProfileComponent } from './pages/DoctorDashboard/practice-profile/practice-profile.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DoctorInfoComponent } from './pages/doctor-info/doctor-info.component';
import { PatientInfoComponent } from './pages/patient-info/patient-info.component';
import { PharmacyInfoComponent } from './pages/pharmacy-info/pharmacy-info.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PatientLayoutComponent,
    DashboardComponent,
    BookingComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AppointmentsComponent,
    ProfileComponent,
    PracticeProfileComponent,
    DoctorLayoutComponent,
    DoctorInfoComponent,
    PatientInfoComponent,
    PharmacyInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule,
    PatientSidebarModule,
    NavbarModule,
    PatientNavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    DoctorSidebarModule,
    DoctorNavbarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
