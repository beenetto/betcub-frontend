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
import { Router, ActivatedRoute } from '@angular/router';
import { DealCollection } from '../model/DealCollection';
import { FormBuilder } from '@angular/forms';
var AddDealComponent = (function () {
    function AddDealComponent(formBuilder, collection, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.collection = collection;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dt = new Date();
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD',
            'DD.MM.YYYY', 'shortDate'];
        this.format = this.formats[0];
        this.today = new Date();
        this.start_date = new Date();
        this.end_date = new Date();
        this.isEdit = false;
        this.pageTitle = "Add new deal";
        this.submitText = "Add";
        this.startDate = new Date();
        this.startDateOn = 0;
        this.endDate = new Date();
    }
    AddDealComponent.prototype.setPage = function (page) {
    };
    AddDealComponent.prototype.activeDateChange = function (date_type) {
        switch (date_type) {
            case 'start_date':
                console.log(this.start_date);
                break;
            case 'end_date':
                break;
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
    AddDealComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dealForm = this.formBuilder.group({
            'content': '',
            'dateStart': '',
            'dateEnd': '',
            'description': '',
            'link': '',
            'title': '',
        });
        console.log(this.dealForm);
        this.linkSubscription = this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            _this.collection.stream.subscribe(function (value) {
                if (params['id']) {
                    _this.isEdit = true;
                    _this.deal = _this.collection.getDealById(params['id']);
                    _this.pageTitle = _this.deal.title;
                    _this.submitText = 'Save';
                    _this.dealForm = _this.formBuilder.group({
                        'title': _this.deal.title,
                        'link': _this.deal.link,
                        'content': _this.deal.content,
                        'dateStart': _this.deal.dateStart,
                        'dateEnd': _this.deal.dateEnd,
                        'temperature': _this.deal.temperature,
                    });
                }
            }, function (error) {
                console.log(error);
            });
        });
        if (this.collection.deals.length) {
            this.collection.refresh();
        }
    };
    AddDealComponent.prototype.onStartDateChange = function (value) {
        console.log(value);
    };
    AddDealComponent.prototype.onEndDateChange = function (value) {
        console.log(value);
    };
    AddDealComponent.prototype.ngOnDestroy = function () {
        this.linkSubscription.unsubscribe();
    };
    return AddDealComponent;
}());
AddDealComponent = __decorate([
    Component({
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