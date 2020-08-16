import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

      user: User;

     constructor(private accountService: AccountService) {
         this.user = this.accountService.userValue;
     }

  ngOnInit() {
  }

}
