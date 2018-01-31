import { EventEmitter, Injectable, Output } from '@angular/core';
import { Headers } from '@angular/http';
import { AuthService, AuthState } from './auth.service';
import { Deal } from '../model/Deal';
import { DealCollection } from '../model/DealCollection';
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';


@Injectable()
export class SharedService {

    private static _instance: SharedService;

    static IS_SERVICE_LOCAL: boolean = false;
    static HEADERS = new Headers({ 'Content-Type': 'application/json' });
    static SERVICE_ROOT_LOCAL: string = "http://localhost:4200/";
    static SERVICE_ROOT_REMOTE: string = "https://betcubco20160823124853.azurewebsites.net/";
    static USER: User;

    private _authService: AuthService;
    private _sharedMessageManager: BehaviorSubject<SharedMessages> = new BehaviorSubject(null);

    loggedIn: boolean;
    currentDeal: Deal;
    dealCollection: DealCollection;
    sharedMessage: Observable<SharedMessages>;
    showLogin: Function;

    constructor() {
        this.sharedMessage = this._sharedMessageManager.asObservable();
        this._authService = new AuthService();
        this._authService.authChange.subscribe(
            newAuthState => {
                this.loggedIn = (newAuthState === AuthState.LoggedIn);
                SharedService.USER = this._authService.user;
            }
        );
    }

    set userService(_userService: UserService) {
        this._authService.loginEndPoint = SharedService.SERVICE_ROOT +
            SharedService.ENDPOINT['login'];
      this._authService.registerEndPoint = SharedService.SERVICE_ROOT +
        SharedService.ENDPOINT['register'];
        this._authService.logoutEndPoint = SharedService.SERVICE_ROOT +
            SharedService.ENDPOINT['logout'];
        this._authService.userService = _userService;
    }

    static get INSTANCE(): SharedService {
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
          'login': 'login',
          'logout': 'logout',
          'privacy-policy': 'privacy-policy',
          'terms-and-conditions': 'terms-and-conditions',

      } : {
          'about-us': 'api/about-us',
          'deals': 'api/Offers/Deals',
          'login': 'api/Account/Login',
        'register': 'api/Account/Register',
          'logout': 'api/Account/LogOff',
          'privacy-policy': 'api/privacy-policy',
          'terms-and-conditions': 'api/terms-and-conditions',
      };
  }

    login(username: string, password: string): void {
        this._authService.login(username, password);
    }

  register(username: string, emailaddress: string, password: string): void {
    this._authService.register(username, password);
  }

    logout(): void {
        this._authService.logout();
    }

    openLogin(): void {
        this._sharedMessageManager.next(SharedMessages.openLogin);
    }

    openDeal(id: string): void {
        this.dealCollection.getDeal(id).subscribe(
            deal => {
                this.currentDeal = deal;
                this._sharedMessageManager.next(SharedMessages.openDeal);
            }
        );

    }
}

export const enum SharedMessages {
    openDeal,
    openLogin
}
