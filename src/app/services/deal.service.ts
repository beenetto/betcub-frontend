import { Injectable }     from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
// import { Deal }           from './deal';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DealService {

	private headers = new Headers({});
	private dealsUrl = 'http://localhost:3000/db';  // URL to web API

	constructor(private http: Http) {}

	getDeals (): Observable<any[]> {
		return this.http.get(this.dealsUrl)
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

 