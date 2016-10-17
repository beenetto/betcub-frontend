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

	public malac: string = "malac";
	public deals: DealCollection;

	errorMessage: string;

	constructor (
		private loginService: LoginService, 
		private dealService: DealService, 
		private collection: DealCollection) {}

	login() {
		this.loginService.login("ferenc@po.po", "Szentendre_4")
			.subscribe((result) => {
				if (result) {

					//this.router.navigate(['']);
				}
		});                 
	}

	ngOnInit() { 
		this.getDeals(); 
	}

	getDeals() {

		this.dealService.getDeals()
			.subscribe(
				deals => this.collection.deals = deals,
				error =>  this.errorMessage = <any>error);
	}
}
