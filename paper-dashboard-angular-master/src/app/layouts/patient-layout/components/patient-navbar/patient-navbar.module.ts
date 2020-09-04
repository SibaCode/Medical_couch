import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientNavbarComponent } from './patient-navbar.component';
// /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.component.ts

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ PatientNavbarComponent ],
    exports: [ PatientNavbarComponent ]
})
export class PatientNavbarModule {}
