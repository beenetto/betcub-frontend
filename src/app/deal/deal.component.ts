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
  avatar: string;
  creator: string;
  since: string;

	constructor() {}

	ngOnInit() {
		  this.id = this.data['id'];
		  this.title = this.data['title'];
		  this.link = this.data['link'];
		  this.content = this.data['content'];
      this.temperature = this.data['temperature'];
      this.creator = this.data['creator'].name;
      this.avatar = SharedService.SERVICE_ROOT + this.data["creator"].avatar;
      this.since = this.data['since'];
	}
}
