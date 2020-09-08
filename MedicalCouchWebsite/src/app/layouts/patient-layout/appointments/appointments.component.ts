import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';
import { AppointmentResponse, Appointment } from '../../../models/appointment';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointment: Appointment[];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getBooking().subscribe( (res:AppointmentResponse) => {
      this.appointment = res.data ;
      console.log(res)
    })
  }
  cancel() {

    Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
  }
}
