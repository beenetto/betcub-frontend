import { Component, OnInit } from '@angular/core';
import { DealService } from './services/deal.service';
import { DealCollection } from './model/DealCollection';
import { LoginService } from './services/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent implements OnInit {
	title = 'app works!';

	public deals: DealCollection;

	errorMessage: string;

	constructor (
		private loginService: LoginService, 
		private dealService: DealService, 
		private collection: DealCollection) {}

	login() {
	            
	}

	ngOnInit() { 
		this.getDeals();
	}

	getDeals() {
		this.dealService.getDeals()
			.subscribe(
				deals => {
					this.collection.refresh(deals);
				},
				error =>  {
					this.errorMessage = <any>error
		});
	}
}
