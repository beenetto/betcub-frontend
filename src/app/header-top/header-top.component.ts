import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  constructor() { }

  set_filter(filter_name: String) {

  	console.log(filter_name);
  }

  ngOnInit() {
  }

}