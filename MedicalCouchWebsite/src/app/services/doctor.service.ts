import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {



  // headers = new HttpHeaders().set('Authentication', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInR5cGUiOiJwIiwiaWF0IjoxNTk4MzUwOTEzLCJleHAiOjE1OTkxNTA5MTN9.gzgdNe9kYZnYAqulkCoDmUKLRoPhAvhJTVepmZrjPYw');


  constructor(private  http: HttpClient) { }

  public getheaders() {

    let headers = new HttpHeaders().set('Authentication', localStorage.getItem('token').substring(1 , localStorage.getItem('token').length - 1));
    return headers ;
  }
  public getPractices() {
    return this.http.get(environment.url + 'doctor' ,{ headers: this.getheaders() })
  }

}
