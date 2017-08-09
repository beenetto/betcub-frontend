import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

    sharedService = SharedService.INSTANCE;

    constructor() {}

    get username() {
        return SharedService.USER.username;
    }

    set_filter(filter: string) {
        this.sharedService.dealCollection.getDeals(filter);
    }

    show_login() {
        SharedService.INSTANCE.openLogin();
    }

    ngOnInit() {}

}
