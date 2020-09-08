import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthPatientService {

  

  constructor(private http: HttpClient) { }


  public loginPatient(data) {

    return this.http.post(environment.url + 'patient/login', data)

  }
}
