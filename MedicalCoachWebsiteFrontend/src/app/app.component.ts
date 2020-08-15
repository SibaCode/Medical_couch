import { Component } from "@angular/core";
// import { AuthenticationService } from "./authentication.service";
// import { AuthService } from 'src/app/services/auth.service';
import { AccountService } from 'src/app/services/account.service';

import { User } from 'src/app/models/user';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  user: User;
  title = 'MedicalCoachWebsiteFrontend';

  constructor( private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}
