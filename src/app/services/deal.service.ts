import { Injectable }     from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { DealComponent } from '../deal/deal.component'
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DealService {

	private headers = new Headers({});
	private dealsUrl = 'http://localhost:3000/db';  // URL to web API

	constructor(private http: Http) {}

	getDeals (): Observable<any[]> {
		let response = this.http.get(this.dealsUrl)
			.map(this.extractData)
			.catch(this.handleError);
		return response;
	}

	addDeal (name: string): Observable<DealComponent> {
		let body = JSON.stringify({ name });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.dealsUrl, body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || { };
	}

	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';

		console.error(errMsg); // log to console instead

		return Observable.throw(errMsg);
	}
}

 