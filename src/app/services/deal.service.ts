import { Deal } from '../model/deal';
import { DealComponent } from '../deal/deal.component'
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams }
	from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './shared.service';


@Injectable()
export class DealService {

	private dealsUrl: string = SharedService.SERVICE_ROOT +
		SharedService.ENDPOINT['deals'];

	constructor(private http: Http) {}

	getRequestData () {
		return new RequestOptions({ headers: SharedService.HEADERS });
	}

	getDeal (id: string): Observable<Deal> {
		return	this.http.get(this.dealsUrl + "/" + id, null)
			.map(this.extractData)
			.catch(this.handleError);
	}

	getDeals (filter: string=""): Observable<Deal[]> {

		let params: URLSearchParams = new URLSearchParams();

		if (filter) {
			params.set('filter', filter);
		}

		let requestOptions = new RequestOptions();
		requestOptions.search = params;

		let response = this.http.get(this.dealsUrl, requestOptions)
			.map(this.extractData)
			.catch(this.handleError);
		return response;
	}

	addDeal (deal: Deal): Observable<DealComponent> {

		return this.http
			.post(this.dealsUrl, deal, this.getRequestData())
			.map(this.extractData)
			.catch(this.handleError);
	}

	saveDeal (deal: Deal): Observable<DealComponent> {

		return this.http
			.put(this.dealsUrl + '/' + deal.id,
				 deal,
				 this.getRequestData())
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
