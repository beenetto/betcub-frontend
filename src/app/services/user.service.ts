import { Injectable } from '@angular/core';
import { BaseRequestOptions, Http, Response, RequestOptions } from '@angular/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(username: string,
        password: string,
            endPoint: string):Observable<User> {
      return this.http.post(endPoint, {
        name: username,
        password: password,
        rememberMe: false
      }).map(res => res.json());
  }

  register(username: string,
           emailaddress: string,
           password: string,
           endPoint: string): Observable<User> {
    return this.http.post(endPoint, {
      userName: username,
      email: emailaddress,
      givenName: 'testgiven',
      surName: 'testsur',
      password: password,
      confirmPassword: password,
      returnUrl: ''
    }).map(res => res.json());
  }

  logout(endPoint: string):Observable<User> {
      return this.http.get(endPoint).map(res => res.json());
  }

}
