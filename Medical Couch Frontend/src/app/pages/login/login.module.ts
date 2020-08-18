import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './pages/login/login.routing';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/patientDashboard/dashboard/dashboard.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,

    HomeComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
