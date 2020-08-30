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
        localStorage.setItem('token', JSON.stringify(res.data.token ));
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        this.route.navigate(['/patient'])

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
