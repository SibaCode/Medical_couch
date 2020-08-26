import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  headers = new HttpHeaders().set('Authentication', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInR5cGUiOiJwIiwiaWF0IjoxNTk4NDYwNDgyLCJleHAiOjE1OTkyNjA0ODJ9.dSyRWBdOHbP5uWkHpKml2_09SG4pRBQ3otHloMcEqKI');
  
  constructor(private http: HttpClient) { }

  public update(user) {
    return this.http.patch(environment.url + 'patient' , user ,{ headers: this.headers } )
  }
}
