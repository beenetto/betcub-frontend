var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './shared.service';
var DealService = (function () {
    function DealService(http) {
        this.http = http;
        this.dealsUrl = SharedService.SERVICE_ROOT +
            SharedService.ENDPOINT['deals'];
    }
    DealService.prototype.getRequestData = function () {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return { headers: headers, options: options };
    };
    DealService.prototype.getDeals = function () {
        var response = this.http.get(this.dealsUrl)
            .map(this.extractData)
            .catch(this.handleError);
        return response;
    };
    DealService.prototype.addDeal = function (deal) {
        return this.http
            .post(this.dealsUrl, deal, this.getRequestData().options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DealService.prototype.saveDeal = function (deal) {
        return this.http
            .put(this.dealsUrl + '/' + deal.id, deal, this.getRequestData().options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DealService.prototype.removeDeal = function (id) {
        return this.http.delete(this.dealsUrl + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DealService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DealService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return DealService;
}());
DealService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], DealService);
export { DealService };
//# sourceMappingURL=../../../../src/app/services/deal.service.js.map