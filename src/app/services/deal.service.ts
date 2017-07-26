import { Deal } from '../model/deal';
import { DealComponent } from '../deal/deal.component'
import { Injectable }     from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { SharedService } from '../services/shared.service';


@Injectable()
export class DealService {

	private dealsUrl: string = SharedService.SERVICE_ROOT +
		SharedService.ENDPOINT['deals'];

	constructor(private http: Http) {}

	getRequestData () {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return { headers: headers, options: options	}
	}

	getDeals (): Observable<Deal[]> {
		let response = this.http.get(this.dealsUrl)
			.map(this.extractData)
			.catch(this.handleError);
		return response;
	}

	addDeal (deal: Deal): Observable<DealComponent> {

		return this.http
			.post(this.dealsUrl, deal, this.getRequestData().options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	saveDeal (deal: Deal): Observable<DealComponent> {

		return this.http
			.put(this.dealsUrl + '/' + deal.id,
				 deal,
				 this.getRequestData().options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	removeDeal (id: String): Observable<DealComponent> {

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
