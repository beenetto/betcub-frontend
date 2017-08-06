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
import { LoginComponent } from './modal/login/login.component';
import { DialogService } from "ng2-bootstrap-modal";
import { SharedService } from './services/shared.service';
var AppComponent = (function () {
    function AppComponent(dialogService) {
        this.dialogService = dialogService;
        this._sharedServiceInitiator = SharedService.INSTANCE;
        SharedService.INSTANCE.showLogin = this.showLogin;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        SharedService.INSTANCE.sharedMessage.subscribe(function (message) {
            if (message === 0) {
                _this.showLogin();
            }
        });
    };
    AppComponent.prototype.showLogin = function () {
        var disposable = this.dialogService
            .addDialog(LoginComponent, {
            title: 'Login or register',
            message: ''
        })
            .subscribe(function (isConfirmed) {
            if (isConfirmed) {
                console.log('accepted');
            }
            else {
                console.log('declined');
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [DialogService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map