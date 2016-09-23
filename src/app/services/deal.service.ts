import { Injectable }     from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
// import { Deal }           from './deal';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DealService {

  private headers = new Headers({});
  private dealsUrl = 'https://betcubco20160823124853.azurewebsites.net/api/Deals/Deals';  // URL to web API
  
  //private dealsUrl = 'https://jsonplaceholder.typicode.com/posts';

  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'https://betcubco20160823124853.azurewebsites.net/', 
        JSON.stringify({ email, password }), 
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }
        return res.success;
      });
  }
  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getDeals (): Observable<any[]> {
    return this.http.get(this.dealsUrl, {headers: this.headers})
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    
    console.error(errMsg); // log to console instead
    
    return Observable.throw(errMsg);
  }
}

 