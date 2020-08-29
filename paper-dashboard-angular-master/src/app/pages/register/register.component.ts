import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { AidSchemeResponse, AidScheme } from '../../models/aidScheme';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // registerForm = new FormGroup({
  //   name: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4),
  //   ]),
  //   surname: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   medical_aid: new FormControl(''),
  //   address: new FormControl(''),
  //   medical_name: new FormControl(''),
  //   idno: new FormControl(''),
  //   cell: new FormControl(''),
  //   aid_number: new FormControl(''),
  //   title: new FormControl('Mr'),
  //   confirm: new FormControl(''),
  //   gender: new FormControl('Male'),
  // });

  medicalAid: AidScheme[] ;
  registerForm: FormGroup ;
  constructor(private fb: FormBuilder, private patientService: PatientService) { 

    this.patientService.getMedicalAid().subscribe( (res: AidSchemeResponse) => {
        this.medicalAid = res.data ;
    })
    
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: new FormControl('', [
                                  Validators.required,
      ]),

    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
    medical_aid: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    medical_name: new FormControl('1', [Validators.required]),
    idno: new FormControl('', [Validators.required]),
    cell: new FormControl('', [Validators.required]),
    aid_number: new FormControl('', [Validators.required]),
    title: new FormControl('Mr'),
    confirm: new FormControl('', [Validators.required]),
    gender: new FormControl('Male'),
    })
    
  }

  register() {
    console.log(this.registerForm.value);
    
    this.patientService.register(this.registerForm.value).subscribe( (res) => {
    
      Swal.fire(
        'Success',
        'Registration successful',
        'success'
      )
    }, (error) => {
      Swal.fire(
        'Error',
        error.error.message,
        'error'
      )
    })
  }

  

}