import { Component, OnInit } from '@angular/core';
import { DealCollection } from '../model/DealCollection';
import { DealComponent } from '../deal/deal.component';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {
	
	errorMessage: string;
	// mode = 'Observable';
	response = '';

	constructor (private collection: DealCollection) {}

	ngOnInit() { 
		
	}
}