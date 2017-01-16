import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

	@Input() data:Object;

	id: string;
	title: string;
	description: string;
	content: string; 
	temperature: string;

	constructor() {}

	ngOnInit() {

		this.id = this.data['id'];
		this.title = this.data['title'];
		this.description = this.data['description'];
		this.content = this.data['content'];
		this.temperature = this.data['temperature'];
	}
}
