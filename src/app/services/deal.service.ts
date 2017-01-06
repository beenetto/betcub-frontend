import { Injectable }     from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { DealComponent } from '../deal/deal.component'
import { Observable }     from 'rxjs/Observable';
import { Deal } from '../model/deal';

@Injectable()
export class DealService {

	private headers = new Headers({});
	//private dealsUrl = 'http://localhost:3000/db';  // URL to web API
	private dealsUrl = '';
	private dealsPath = 'api/Deals/Deals';
	
	constructor(private http: Http) {
		var config = require('./conf.json');
		//this.dealsUrl = config.serviceRoot + this.dealsPath;
		this.dealsUrl = 'http://localhost:3000/deals';
	}

	getDeals (): Observable<Deal[]> {
		let response = this.http.get(this.dealsUrl)
			.map(this.extractData)
			.catch(this.handleError);
		return response;
	}

	addDeal (deal: Deal): Observable<DealComponent> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.dealsUrl, deal, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	saveDeal (deal: Deal): Observable<DealComponent> {		
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.put(this.dealsUrl + '/' + deal.id, deal, options)
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

 