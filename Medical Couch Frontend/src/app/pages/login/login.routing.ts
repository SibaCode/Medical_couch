
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/patientDashboard/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';

// import { DashboardComponent } from './pages/patientDashboard/dashboard/dashboard.component';
const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent   },
   { path: 'register', component: RegisterComponent   },

];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class LoginRoutingModule { }
