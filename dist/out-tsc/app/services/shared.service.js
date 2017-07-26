var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var SharedService = SharedService_1 = (function () {
    function SharedService() {
    }
    Object.defineProperty(SharedService, "SERVICE_ROOT", {
        get: function () {
            return SharedService_1.IS_SERVICE_LOCAL ? SharedService_1.SERVICE_ROOT_LOCAL
                : SharedService_1.SERVICE_ROOT_REMOTE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService, "ENDPOINT", {
        get: function () {
            return SharedService_1.IS_SERVICE_LOCAL ?
                {
                    'about-us': 'about-us',
                    'deals': 'deals',
                    'privacy-policy': 'privacy-policy',
                    'terms-and-conditions': 'terms-and-conditions',
                } : {
                'about-us': 'api/about-us',
                'deals': 'api/Deals/Deals',
                'privacy-policy': 'api/privacy-policy',
                'terms-and-conditions': 'api/terms-and-conditions',
            };
        },
        enumerable: true,
        configurable: true
    });
    return SharedService;
}());
SharedService.IS_SERVICE_LOCAL = true;
SharedService.SERVICE_ROOT_LOCAL = "http://localhost:3000/";
SharedService.SERVICE_ROOT_REMOTE = "https://betcubco20160823124853.azurewebsites.net/";
SharedService = SharedService_1 = __decorate([
    Injectable()
], SharedService);
export { SharedService };
var SharedService_1;
//# sourceMappingURL=../../../../src/app/services/shared.service.js.map