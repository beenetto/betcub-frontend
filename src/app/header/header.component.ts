import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  	constructor(private elementRef:ElementRef, private layoutService:LayoutService) { }

	@HostListener('window:resize', ['$event'])
	onResize(event) {
	  this.layoutService.headerHeight = this.elementRef.nativeElement.offsetHeight;
	}

  ngOnInit() {
  	this.layoutService.headerHeight = this.elementRef.nativeElement.offsetHeight;
  }

}
