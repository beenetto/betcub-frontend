import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { DealService } from '../services/deal.service'

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css'],
  providers: [DealService]
})
export class DealListComponent implements OnInit {
	errorMessage: string;
	deals: any[];
	mode = 'Observable';
	response = ''

	constructor (private dealService: DealService) {}

	ngOnInit() { 
		//this.login();
		this.getDeals(); 
	}

	login() {
		this.dealService.login("ferenc@popo", "Szentendre_4").subscribe((result) => {
	      if (result) {
	        //this.router.navigate(['']);
	      }
	    });                 
	}

	getDeals() {
		this.dealService.getDeals()
		                 .subscribe(
		                   deals => this.deals = deals,
		                   error =>  this.errorMessage = <any>error);
	}

	@ViewChild('dataContainer') dataContainer: ElementRef;
    loadData(data) {
        this.dataContainer.nativeElement.innerHTML = data;
    }

	// addDeal (name: string) {
	// 	if (!name) { return; }
	// 	this.dealService.addDeal(name)
	// 	                 .subscribe(
	// 	                   deal  => this.deals.push(deal),
	// 	                   error =>  this.errorMessage = <any>error);
	// }

}
