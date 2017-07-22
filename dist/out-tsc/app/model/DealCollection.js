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
import { DealService } from '../services/deal.service';
import { Subject } from 'rxjs/Subject';
var DealCollection = (function () {
    function DealCollection(dealService) {
        this.dealService = dealService;
        this.deals = [];
        this.stream = new Subject();
        this.getDeals();
    }
    DealCollection.prototype.getDeals = function () {
        var _this = this;
        this.dealService.getDeals()
            .subscribe(function (dealStream) {
            _this.deals = dealStream;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DealCollection.prototype.addDeal = function (deal) {
        return this.dealService.addDeal(deal);
    };
    DealCollection.prototype.saveDeal = function (deal) {
        return this.dealService.saveDeal(deal);
    };
    DealCollection.prototype.removeDeal = function (id) {
        return this.dealService.removeDeal(id);
    };
    DealCollection.prototype.refresh = function () {
        this.stream.next(this.deals);
    };
    DealCollection.prototype.getDealById = function (id) {
        return this.deals
            .filter(function (d) { return d.id === id; })
            .pop();
    };
    DealCollection.prototype.getAll = function () {
        return this.deals;
    };
    return DealCollection;
}());
DealCollection = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [DealService])
], DealCollection);
export { DealCollection };
//# sourceMappingURL=../../../../src/app/model/DealCollection.js.map