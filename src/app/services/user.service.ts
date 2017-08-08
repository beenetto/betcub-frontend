import { Injectable } from '@angular/core';
import { BaseRequestOptions, Headers, Http, Response, RequestOptions } from '@angular/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(username: string,
        password: string,
            endPoint: string):Observable<User> {
      return this.http.get(endPoint).map(res => res.json());
  }
}
