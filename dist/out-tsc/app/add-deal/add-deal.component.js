var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Deal } from '../model/deal';
import * as moment from 'moment';
import { DealCollection } from '../model/DealCollection';
var AddDealComponent = (function () {
    function AddDealComponent(formBuilder, collection, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.collection = collection;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.deal = new Deal({});
        this.isEdit = false;
        this.isEdit = activatedRoute.snapshot
            .url[0].path == 'edit-deal';
        this.min_start_date = new Date();
        this.min_end_date = moment(this.min_start_date)
            .add(1, 'day').toDate();
    }
    AddDealComponent.prototype.ngOnInit = function () {
        this.dealForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(2)]],
            content: ['', [Validators.required, Validators.minLength(2)]],
            link: ['', [Validators.required, Validators.minLength(2)]]
        });
        if (this.isEdit) {
            this.deal = this.collection.getDealById(this.activatedRoute.snapshot.params['id']);
        }
        this.dealForm.patchValue(this.deal);
    };
    AddDealComponent.prototype.setPage = function (page) {
    };
    AddDealComponent.prototype.activeDateChange = function () {
        var start = moment(this.deal.dateStart);
        var offset_one = moment(start).add(1, 'day').toDate();
        this.min_end_date = offset_one;
        if (moment(this.deal.dateEnd).diff(start) < 86400000) {
            this.deal.dateEnd = offset_one;
        }
    };
    AddDealComponent.prototype.onSubmit = function (_deal) {
        var _this = this;
        if (this.isEdit) {
            _deal.id = this.deal.id;
            this.collection.saveDeal(_deal).subscribe(function (dealStream) {
                console.log("DEAL SAVED");
                for (var prop in _deal) {
                    _this.deal[prop] = _deal[prop];
                }
                _this.router.navigate(["home"]);
            }, function (error) {
            });
        }
        else {
            this.collection.addDeal(_deal).subscribe(function (dealStream) {
                console.log("DEAL ADDED");
                _this.router.navigate(["home"]);
            }, function (error) {
            });
        }
    };
    AddDealComponent.prototype.remove = function () {
        var _this = this;
        this.collection.removeDeal(this.deal.id).subscribe(function (dealStream) {
            console.log("DEAL DELETED");
            _this.collection.getDeals();
            _this.router.navigate(["home"]);
        }, function (error) {
        });
    };
    AddDealComponent.prototype.ngOnDestroy = function () { };
    return AddDealComponent;
}());
AddDealComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'app-add-deal',
        templateUrl: './add-deal.component.html',
        styleUrls: ['./add-deal.component.css']
    }),
    __metadata("design:paramtypes", [FormBuilder,
        DealCollection,
        ActivatedRoute,
        Router])
], AddDealComponent);
export { AddDealComponent };
//# sourceMappingURL=../../../../src/app/add-deal/add-deal.component.js.map