import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {


  constructor(private  http: HttpClient) { }


  public getPractices() {
    return this.http.get(environment.url + 'doctor' ,{ headers: this.getheaders() })
  }


  public getheaders() {

    let headers = new HttpHeaders().set('Authentication', localStorage.getItem('token').substring(1 , localStorage.getItem('token').length - 1));
    return headers ;
  }
}
