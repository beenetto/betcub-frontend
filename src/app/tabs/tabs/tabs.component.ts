import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tab, TabComponent } from '../tab/tab.component'

@Component({
  selector: 'tabs-comp',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

    tabs:Tab[] = [];
    @Output() selected = new EventEmitter();

    addTab(tab:Tab) {
        if (!this.tabs.length) {
            tab.selected = true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab:Tab) {
        this.tabs.map((tab) => {
            tab.selected = false;
        })
        tab.selected = true;
        this.selected.emit({selectedTab: tab});
    }
}
