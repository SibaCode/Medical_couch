import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { PracticeResponse, Practice } from '../../../models/practice';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {


@ViewChild("placesRef", {static: true}) placesRef : GooglePlaceDirective;

  practices: Practice[] ;
  constructor(private doctor: DoctorService) { }

  ngOnInit() {
    this.doctor.getPractices().subscribe( (res: PracticeResponse) => {
      this.practices = res.data ;
      console.log(res)
    }, (err) => {
      // Handle error here
    })
  }

  ngAfterViewInit(){

  }

  public handleAddressChange(address: Address) {
    console.log(address) ;
}

}
