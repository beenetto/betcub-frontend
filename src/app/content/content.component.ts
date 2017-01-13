import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	marginTop = 0;
	gap = 30;

  	constructor(private elementRef:ElementRef, private layoutService:LayoutService) { }

  	@HostListener('window:resize', ['$event'])
	onResize(event) {
	 	this.marginTop = this.layoutService.headerHeight + this.gap;
	}

	ngOnInit() {
		this.marginTop = this.layoutService.headerHeight + this.gap;
	}

}
