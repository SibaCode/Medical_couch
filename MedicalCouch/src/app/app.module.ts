import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { PharmacyComponent } from './pages/pharmacy/pharmacy.component';
import { ContactComponent } from './pages/contact/contact.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
// import { ProfileComponent } from './pages/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    // FooterComponent,
    // HeaderComponent,
    // SidebarComponent,
    PatientComponent,
    DoctorComponent,
    PharmacyComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    // ProfileComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ComponentsModule,
  // NgbModule,
  RouterModule,
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
