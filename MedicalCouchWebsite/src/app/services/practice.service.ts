import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

constructor(private http: HttpClient) { }

    public getReviews(id) {
      return this.http.get(environment.url + 'review/' + id ,  { headers: this.getheaders() })
    }

    public getheaders() {

      let headers = new HttpHeaders().set('Authentication', localStorage.getItem('token').substring(1 , localStorage.getItem('token').length - 1));
      return headers ;
    }


    public addReview(data) {
      return this.http.post(environment.url + "review" , data , { headers: this.getheaders() })
    }



}
