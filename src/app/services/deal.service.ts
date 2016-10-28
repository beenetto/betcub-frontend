import { Injectable }     from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { DealComponent } from '../deal/deal.component'
import { Observable }     from 'rxjs/Observable';
import { Deal } from '../model/deal';

@Injectable()
export class DealService {

	private headers = new Headers({});
	//private dealsUrl = 'http://localhost:3000/db';  // URL to web API
	private dealsUrl = 'https://betcubco20160823124853.azurewebsites.net/api/Deals/Deals';
	
	constructor(private http: Http) {}

	getDeals (): Observable<Deal[]> {
		let response = this.http.get(this.dealsUrl)
			.map(this.extractData)
			.catch(this.handleError);
		return response;
	}

	addDeal (deal: string): Observable<DealComponent> {
		let body = JSON.stringify({ deal });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.dealsUrl, body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	saveDeal (deal: any): Observable<DealComponent> {
		let body = JSON.stringify({ deal });		
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.put(this.dealsUrl + '/' + deal.id, body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	removeDeal (id: String): Observable<DealComponent> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.delete(this.dealsUrl + '/' + id,)
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

 