import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

	@Input() data:Object;

    sharedService = SharedService.INSTANCE;

	id: string;
	title: string;
	link: string;
	content: string;
	temperature: string;

	constructor() {}

	ngOnInit() {

		this.id = this.data['id'];
		this.title = this.data['title'];
		this.link = this.data['link'];
		this.content = this.data['content'];
		this.temperature = this.data['temperature'];
	}
}
