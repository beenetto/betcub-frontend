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
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { Observable } from 'rxjs';
var BasicPageComponent = (function () {
    function BasicPageComponent(activatedRoute, http) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.content = "";
        this.http.get(SharedService.SERVICE_ROOT +
            activatedRoute.snapshot.url[0].path)
            .map(function (res) { return res.json().content; })
            .subscribe(function (content) { return _this.content = content; }, function (error) { return Observable.throw(error); });
    }
    BasicPageComponent.prototype.ngOnInit = function () { };
    return BasicPageComponent;
}());
BasicPageComponent = __decorate([
    Component({
        selector: 'app-basic-page',
        templateUrl: './basic-page.component.html',
        styleUrls: ['./basic-page.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Http])
], BasicPageComponent);
export { BasicPageComponent };
//# sourceMappingURL=../../../../src/app/basic-page/basic-page.component.js.map