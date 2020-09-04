import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthPatientService } from '../../services/auth-patient.service';
import { UserResponse } from '../../models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private auth: AuthPatientService, private route: Router) { }

  ngOnInit() {
  }

  login() {

    this.auth.loginPatient(this.loginForm.value).subscribe( (res: UserResponse) => {
        localStorage.setItem('user', JSON.stringify(res.data.user )) ; 
        this.route.navigate(['/dashboard'])

    }, (error) => {
      console.log(error.error.message);
      let msg: string = error.error.message ;
      Swal.fire(
        'Error',
        error.error.message,
        'error'
      )
      // error handle here
    })
    console.log(this.loginForm.value); 
  }

}
