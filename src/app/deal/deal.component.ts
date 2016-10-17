import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

	@Input() data:Object;

	public title:String;
	public content:String; 

	constructor() {}

	ngOnInit() {

		this.title = this.data['title'];
		this.content = this.data['content'];
	}
}
