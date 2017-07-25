import { Component, Input, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component'


export interface Tab {
  tabText: string,
  selected: boolean
}

@Component({
  selector: 'tab-comp',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, Tab {

    @Input() tabText;
    selected: boolean = false;

    constructor(private tabsComponent: TabsComponent) {}

    ngOnInit() {
        this.tabsComponent.addTab(this);
    }
}
