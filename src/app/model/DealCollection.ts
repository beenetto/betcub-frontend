import { Input, Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { DealService } from '../services/deal.service';
import { Deal } from './deal';
import { DealComponent } from '../deal/deal.component'
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DealCollection {

    public deals: Array<Deal> = [];
    public stream: Subject<Array<Deal>> = new Subject<Array<Deal>>();
    public errorMessage: String;

    constructor (private dealService: DealService) { this.getDeals(); }

    getDeals() {
		this.dealService.getDeals()
			.subscribe(
				dealStream => {
					this.deals = dealStream;
				},
				error =>  {
					this.errorMessage = <any>error
		});
	}

	addDeal (deal: Deal): Observable<DealComponent>{
		return this.dealService.addDeal(deal);
	}

	saveDeal (deal: Deal): Observable<DealComponent>{
		return this.dealService.saveDeal(deal);	
	}

	removeDeal (id: String): Observable<DealComponent>{
		return this.dealService.removeDeal(id);   
	}

	refresh(): void {
		this.stream.next(this.deals);
	}

	getDealById(id: String): Deal {
		return this.deals
			.filter(d => d.id === id)
			.pop();
	}

	getAll(): Array<Deal> {
		return this.deals;
	}
}
