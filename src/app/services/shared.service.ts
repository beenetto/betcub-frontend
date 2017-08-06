import { EventEmitter, Injectable, Output } from '@angular/core';
import { AuthService, AuthState } from './auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

    private static _instance: SharedService;

    static IS_SERVICE_LOCAL: boolean = true;
    static SERVICE_ROOT_LOCAL: string = "http://localhost:3000/";
    static SERVICE_ROOT_REMOTE: string = "https://betcubco20160823124853.azurewebsites.net/";

    private _authService: AuthService;
    private _sharedMessageManager: BehaviorSubject<SharedMessages> = new BehaviorSubject(null);
    sharedMessage: Observable<SharedMessages>;
    loggedIn: boolean;
    showLogin: Function;

    constructor() {
        this.sharedMessage = this._sharedMessageManager.asObservable();
        this._authService = new AuthService();
        this._authService.authChange.subscribe(
            newAuthState => this.loggedIn = (newAuthState === AuthState.LoggedIn)
        );
    }

    static get INSTANCE() {
        return this._instance || (this._instance = new this());
    }

    static get SERVICE_ROOT(): string {
        return SharedService.IS_SERVICE_LOCAL ? SharedService.SERVICE_ROOT_LOCAL
            : SharedService.SERVICE_ROOT_REMOTE;
    }

    static get ENDPOINT(): Object {
        return SharedService.IS_SERVICE_LOCAL ?
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
    }

    login(): void {
        this._authService.login();
    }

    logout(): void {
        this._authService.logout();
    }

    openLogin(): void {
        this._sharedMessageManager.next(SharedMessages.openLogin);
    }
}

export const enum SharedMessages {
    openLogin
}
