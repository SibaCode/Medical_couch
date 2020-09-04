import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { PracticeResponse, Practice } from '../../../models/practice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  practices: Practice[] ;
  constructor(private doctor: DoctorService) { }

  ngOnInit() {
    this.doctor.getPractices().subscribe( (res: PracticeResponse) => {
      this.practices = res.data ;

    }, (err) => {
      // Handle error here
    })
  }

}
