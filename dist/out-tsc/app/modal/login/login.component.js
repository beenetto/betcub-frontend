var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(dialogService, fb) {
        var _this = _super.call(this, dialogService) || this;
        _this.fb = fb;
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            account: this.fb.group({
                email: ['', Validators.required],
                confirm: ['', Validators.required]
            })
        });
        this.user.patchValue({
            name: 'YOYO'
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.user.value, this.user.valid);
    };
    LoginComponent.prototype.switchContent = function () {
    };
    LoginComponent.prototype.login = function () {
        this.result = true;
        this.close();
    };
    return LoginComponent;
}(DialogComponent));
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [DialogService, FormBuilder])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../../src/app/modal/login/login.component.js.map