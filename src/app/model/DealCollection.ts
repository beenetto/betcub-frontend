import { Input, Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { DealService } from '../services/deal.service';
import { Deal } from './deal';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DealCollection {

    public deals: Array<Deal> = [];
    public stream: Subject<Array<Deal>> = new Subject<Array<Deal>>();
    public errorMessage: String;

  constructor(private dealService: DealService) {
    this.getDeals();
  }

    getDeals (filter: string="") {
		this.dealService.getDeals(filter)
			.subscribe(
				dealStream => {
					this.deals = dealStream;
          this.stream.next(this.deals);
				},
				error =>  {
					this.errorMessage = <any>error
		});
	}

	addDeal (deal: Deal): Observable<Deal> {
		return this.dealService.addDeal(deal);
	}

	saveDeal (deal: Deal): Observable<Deal> {
		return this.dealService.saveDeal(deal);
	}

	removeDeal (id: String): Observable<Deal> {
		return this.dealService.removeDeal(id);
	}

	getDealFromCache (id: String): Deal {
		return this.deals
			.filter(d => d.id === id)
			.pop();
	}

    getDeal (id: string): Observable<Deal> {
		return this.dealService.getDeal(id);
	}

	getAll (): Array<Deal> {
		return this.deals;
	}
}
