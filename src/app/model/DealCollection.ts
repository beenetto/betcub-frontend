import { Input, Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { DealService } from '../services/deal.service';
import { Deal } from './deal';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DealCollection {

    private deals: Array<Deal> = [];
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

	addDeal (deal: string): void {
		console.log(deal)
		this.dealService.addDeal(deal)
	        .subscribe(
	          dealStream => {
	            console.log("Added");
	          },
	          error =>  {
	            this.errorMessage = <any>error;
	      });
	}

	saveDeal (deal: string): void {
		this.dealService.saveDeal(deal)	
	        .subscribe(
	          dealStream => {
	            console.log("SAVED");
	          },
	          error =>  {
	            this.errorMessage = <any>error;
	      });
	}

	removeDeal (id: String): void {
		this.dealService.removeDeal(id)	
	        .subscribe(
	          dealStream => {
	            console.log("DELETED");
	          },
	          error =>  {
	            this.errorMessage = <any>error;
	      });
	}


	refresh(deals?: Array<Deal>): void {
		if (deals) {
			this.deals = deals;
		}
		this.stream.next(this.deals);
	}

	getDealById(id: String): Deal {
		console.log(this.deals)
		return this.deals
			.filter(d => d.id === id)
			.pop();
	}

	getAll(): Array<Deal> {
		return this.deals;
	}
}
