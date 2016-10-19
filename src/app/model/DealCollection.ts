import { Input, Component, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Deal } from './deal';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DealCollection {

	// private _todos: BehaviorSubject<List<any>>

    private deals = [];
    public stream: Subject<Array<Deal>> = new Subject<Array<Deal>>();

	refresh(_deals) {
		this.deals = _deals;
		this.stream.next(this.deals);
	}

	getDealById(id: string): Deal {
		return this.deals
			.filter(d => d.dealId === id)
			.pop();
	}

	addDeal(deal: Deal) {
		//this.deals.push(deal)
	}

	getAll() {
		return this.deals;
	}
}
