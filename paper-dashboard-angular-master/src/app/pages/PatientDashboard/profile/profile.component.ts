import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from '../../../services/patient.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User
  userForm: FormGroup

  constructor(private fb: FormBuilder , private patServ: PatientService) {
    this.user = JSON.parse(localStorage.getItem('user')) ;;
    this.user.idLoc= "sbdua" ;
    this.userForm = fb.group(this.user)
 }

ngOnInit() {


  console.log(this.user)
}


update() {

  this.patServ.update(this.userForm.value).subscribe( (res) => {
    localStorage.setItem('user',JSON.stringify(this.userForm.value))
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
      title: 'Updated successfully'
    })
  }, (err) => {
    console.log(err)
  })
  console.log(this.userForm.value)
}


}
