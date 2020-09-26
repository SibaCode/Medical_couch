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


  medicalAid: AidScheme[] ;
  registerForm: FormGroup ;
  ph: string = "btn book-btn btn-block btn-outline-primary" ; 
  p: string = "btn book-btn btn-block btn-outline-primary active" ;
  d: string = "btn book-btn btn-block btn-outline-primary" ; 
  select: string = 'p' ;
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


  selected(d) {
    
    console.log(d);
    

    if(d === 'p') {
      this.ph = "btn book-btn btn-block btn-outline-primary" ; 
      this.p = "btn book-btn btn-block btn-outline-primary active" ;
      this.d = "btn book-btn btn-block btn-outline-primary" ; 
      this.select = 'p';
    }else if(d === 'd') {
      this.ph = "btn book-btn btn-block btn-outline-primary" ; 
      this.p = "btn book-btn btn-block btn-outline-primary" ;
      this.d = "btn book-btn btn-block btn-outline-primary active" ; 
      this.select = 'd';
    }else  {
      this.ph = "btn book-btn btn-block btn-outline-primary active" ; 
      this.p = "btn book-btn btn-block btn-outline-primary" ;
      this.d = "btn book-btn btn-block btn-outline-primary" ; 
      this.select = 'ph';
    }
  }



}
