import { Component, OnInit } from '@angular/core';
 import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';
import { DealCollection } from '../model/DealCollection';
import { DealComponent } from '../deal/deal.component';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css'],
  providers: [BrowserDomAdapter]
})
export class DealListComponent implements OnInit {

    private collection: DealCollection;

	hottestDealsElement;
    sharedService = SharedService.INSTANCE;

	errorMessage: string;
	signeUpElementPositionIndex = 1 + Math.floor(Math.random() * 5);
	response = '';

	constructor (private dom: BrowserDomAdapter) {
        this.collection = this.sharedService.dealCollection;
    }

	ngOnInit () {
		this.hottestDealsElement =  this.dom.query("app-hottest-deals");
	}

	removeHottestDeals (e) {
		this.dom.remove(this.hottestDealsElement);
	}
}
