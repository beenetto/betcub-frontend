import { Component, OnInit } from '@angular/core';
 import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';
import { DealCollection } from '../model/DealCollection';
import { DealComponent } from '../deal/deal.component';


@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css'],
  providers: [BrowserDomAdapter]
})
export class DealListComponent implements OnInit {
	
	hottestDealsElement;

	errorMessage: string;
	signeUpElementPositionIndex = 1 + Math.floor(Math.random() * 5);
	response = '';

	constructor (private collection: DealCollection, private dom: BrowserDomAdapter) {}

	ngOnInit () {
		this.hottestDealsElement =  this.dom.query("app-hottest-deals");
	}

	removeHottestDeals (e) {
		this.dom.remove(this.hottestDealsElement);
	}
}