
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorCalendarComponent } from './doctor-calendar.component';
// src/app/layouts/doctor-layout//.ts
@NgModule({
  declarations: [DoctorCalendarComponent],
  // exports: [DoctorCalendarComponent],

  imports: [
    BrowserAnimationsModule,
    FormsModule,
    NgbModalModule,
    CommonModule,
    FlatpickrModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})

export class DoctorCalendarModule { }
