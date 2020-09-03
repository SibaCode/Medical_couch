import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/login.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';


const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  // {  path: 'patient',
  {
         path: 'patient',
         loadChildren: () =>
             import('src/app/layouts/patient-layout/patient-layout.module').then(
                 m => m.PatientLayoutModule
             ),
     },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
