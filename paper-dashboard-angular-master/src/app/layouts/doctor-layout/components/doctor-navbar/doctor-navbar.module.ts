import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorNavbarComponent } from './doctor-navbar.component';
// /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.component.ts

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ DoctorNavbarComponent ],
    exports: [ DoctorNavbarComponent ]
})
export class DoctorNavbarModule {}
