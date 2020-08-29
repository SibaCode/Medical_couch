import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './layouts/admin-layout/components/sidebar/sidebar.module';
import { PatientSidebarModule} from './layouts/patient-layout/components/patient-sidebar/patient-sidebar.module';

import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './layouts/patient-layout/components/navbar/navbar.module';
import { PatientNavbarModule} from './layouts/patient-layout/components/patient-navbar/patient-navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';
import { DashboardComponent } from './pages/PatientDashboard/dashboard/dashboard.component';
import { BookingComponent } from './pages/PatientDashboard/booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PatientLayoutComponent,
    DashboardComponent,
    BookingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    PatientSidebarModule,
    NavbarModule,
    PatientNavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
