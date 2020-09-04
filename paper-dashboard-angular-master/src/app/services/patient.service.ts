import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../../../medicalCouchSite/src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  user: User ;
  constructor(private http: HttpClient) { }

  public update(user) {
    return this.http.patch(environment.url + 'patient' , user ,{ headers: this.getheaders() } )
  }

  public register(user) {
    return this.http.post(environment.url + 'patient' , user )
  }


  public getMedicalAid() {
    return this.http.get(environment.url + 'aid')
  }

  public getBooking() {

    return this.http.get(environment.url + 'appointment/patient', { headers: this.getheaders() })
  }

  public getheaders() {
    
    let headers = new HttpHeaders().set('Authentication', localStorage.getItem('token').substring(1 , localStorage.getItem('token').length - 1));
    return headers ;
  }
}
