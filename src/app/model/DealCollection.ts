import { Injectable } from '@angular/core';
import { Deal } from './deal';

@Injectable()
export class DealCollection {
	public deals: Deal[] = [];

	getDealById(id: string) {
		return this.deals
			.filter(d => d.id === id)
			.pop();
	}

	addDeal(deal: Deal) {
		this.deals.push(deal)
	}

	getAll() {
		return this.deals;
	} 
}
