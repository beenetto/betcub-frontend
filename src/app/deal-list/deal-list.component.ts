import { Component, OnInit, ElementRef, ViewRef, Injector, ComponentFactoryResolver } from '@angular/core';
//import { BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';
import { DealCollection } from '../model/DealCollection';
import { DealComponent } from '../deal/deal.component';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {

    private collection: DealCollection;

	hottestDealsElement;
    sharedService = SharedService.INSTANCE;

	errorMessage: string;
	signeUpElementPositionIndex = 1 + Math.floor(Math.random() * 5);
	response = '';

  constructor(private injector: Injector,
    private r: ComponentFactoryResolver) {

    let factory = this.r.resolveComponentFactory(DealComponent);
    let componentRef = factory.create(injector);
    let view = componentRef.hostView;
    //console.log(JSON.stringify(componentRef, undefined, 2))
    //console.log(JSON.stringify(view, undefined, 2))

    this.collection = this.sharedService.dealCollection;
  }

  ngOnInit() {
    this.hottestDealsElement = null;  // this.dom.querySelector(element, "app-hottest-deals");
	}

	removeHottestDeals (e) {
    //this.hostElement;//this.dom.remove(this.hottestDealsElement);
	}
}
