var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
var HeaderTopComponent = (function () {
    function HeaderTopComponent() {
        this.sharedService = SharedService.INSTANCE;
    }
    HeaderTopComponent.prototype.set_filter = function (filter_name) { console.log(filter_name); };
    HeaderTopComponent.prototype.show_login = function () {
        SharedService.INSTANCE.openLogin();
    };
    HeaderTopComponent.prototype.ngOnInit = function () { };
    return HeaderTopComponent;
}());
HeaderTopComponent = __decorate([
    Component({
        selector: 'app-header-top',
        templateUrl: './header-top.component.html',
        styleUrls: ['./header-top.component.css']
    }),
    __metadata("design:paramtypes", [])
], HeaderTopComponent);
export { HeaderTopComponent };
//# sourceMappingURL=../../../../src/app/header-top/header-top.component.js.map