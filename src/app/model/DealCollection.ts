import { Input, Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { DealService } from '../services/deal.service';
import { Deal } from './deal';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DealCollection {

    private deals: Array<Deal>;
    public stream: Subject<Array<Deal>> = new Subject<Array<Deal>>();
    public errorMessage: String;

    constructor (private dealService: DealService) { this.getDeals(); }

    getDeals() {
		this.dealService.getDeals()
			.subscribe(
				dealStream => {
					let deals = [];
					for (let d of dealStream) {
						let deal = new Deal(d);
						deals.push(deal);
					}
					this.refresh(deals);
				},
				error =>  {
					this.errorMessage = <any>error
		});
	}

	refresh(deals: Array<Deal>): void {
		this.deals = deals;
		this.stream.next(this.deals);
	}

	getDealById(id: String): Deal {
		console.log(this.deals)
		return this.deals
			.filter(d => d.id === id)
			.pop();
	}

	addDeal(deal: Deal): void {
		this.deals.push(deal)
	}

	getAll(): Array<Deal> {
		return this.deals;
	}
}
