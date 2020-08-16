import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;

doctordetail: any;
    constructor(private accountService: AccountService) {}



    ngOnInit() {
      this.accountService.getAll()
        .pipe(first())
        .subscribe(results => {
          // console.log(results.data);
          this.doctordetail = results});


  }
    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id)
            });
    }
}
