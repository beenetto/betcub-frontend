var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
var TabComponent = (function () {
    function TabComponent(tabsComponent) {
        this.tabsComponent = tabsComponent;
        this.selected = false;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.tabsComponent.addTab(this);
    };
    return TabComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], TabComponent.prototype, "tabText", void 0);
TabComponent = __decorate([
    Component({
        selector: 'tab-comp',
        template: '<div>YOYOYOYO</div>',
        styleUrls: ['./tab.component.css']
    }),
    __metadata("design:paramtypes", [TabsComponent])
], TabComponent);
export { TabComponent };
//# sourceMappingURL=../../../../../src/app/tabs/tab/tab.component.js.map