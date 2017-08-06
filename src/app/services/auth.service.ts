import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    private _authManager: BehaviorSubject<AuthState> = new BehaviorSubject(
        AuthState.LoggedOut);
    private _authState: AuthState;

    authChange: Observable<AuthState>;

    constructor() {
        this.authChange = this._authManager.asObservable();
    }

    login() {
        this.setAuthState_(AuthState.LoggedIn);
    }

    logout() {
        this.setAuthState_(AuthState.LoggedOut);
    }

    emmitAuthState() {
        this._authManager.next(this._authState);
    }

    private setAuthState_(newAuthState:AuthState): void {
        this._authState = newAuthState;
        this.emmitAuthState();
    }

}

export const enum AuthState {
    LoggedIn,
    LoggedOut
}
