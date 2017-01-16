import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hottest-deals',
  templateUrl: './hottest-deals.component.html',
  styleUrls: ['./hottest-deals.component.css']
})
export class HottestDealsComponent implements OnInit {

	@Output() onClose = new EventEmitter();

	constructor() { }

	ngOnInit() {
		
	}

	close () {
		this.onClose.emit();
	}

}
