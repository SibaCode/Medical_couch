import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
    user: User;
    doctordetail: any;
    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    ngOnInit() {
      this.accountService.getDoctors()
        .pipe(first())
        .subscribe(results => {
          // console.log(results.data);
          this.doctordetail = results});


  }
}
