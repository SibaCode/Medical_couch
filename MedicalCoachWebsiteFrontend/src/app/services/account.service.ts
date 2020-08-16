import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from "src/environments/environment";
import { User } from 'src/app/models/user';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
public doctordetails: Observable<User>;
    // private heroesUrl = 'api/heroes';

// http://localhost:5004/api/v1
    constructor(
        private router: Router,
        private http: HttpClient
    )


     {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(email, password) {
        return this.http.post<User>(`${environment.apiUrl}/patient/login`, { email, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                // console.log(user.data.token);
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }
    getDoctors() {
      let data = JSON.parse(localStorage.getItem('user')) ;
      let userToken = data.data.token ;
      return this.http.get<User[]>(`${environment.apiUrl}/doctor`,{
        headers: { Authentication: userToken}

      });
       }
    getAll() {
        // return this.http.get<User[]>(`${environment.apiUrl}/doctor`,{
        //   headers: { Authentication: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEwLCJ0eXBlIjoicCIsImlhdCI6MTU5NzQzNzI5MSwiZXhwIjoxNTk4MjM3MjkxfQ.AK1dqV3qw2gvEuAQBZlc25997fb2_HHhHRYSOMs5vHI`}
        // });
        // console.log(user.data.token)
        // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
        let data = JSON.parse(localStorage.getItem('user')) ;
        let userToken = data.data.token ;
        return this.http.get<User[]>(`${environment.apiUrl}/doctor`,{
          headers: { Authentication: userToken}

        });
    }

    // getPosts(): Observable<doctordetails[]> {
    //     return this.http
    //         .get(this._postsURL)
    //         .map((response: Response) => {
    //             return <iposts[]>response.json();
    //         })
    //         .catch(this.handleError);
    // }


    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
