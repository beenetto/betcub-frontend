import { Injectable, Injector, ReflectiveInjector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { UserService } from './user.service';


@Injectable()
export class AuthService {

    private _authManager: BehaviorSubject<AuthState> = new BehaviorSubject(
        AuthState.LoggedOut);
    private _authState: AuthState;

    authChange: Observable<AuthState>;
    endPoint: string;
    user: User;
    userService: UserService;


    constructor() {
        this.authChange = this._authManager.asObservable();
    }

    login(username: string,
          password: string): void {
        this.userService.login(username, password, this.endPoint)
            .subscribe(
                user => {
                    this.user = user;
                    this.setAuthState_(AuthState.LoggedIn);
                },
                error => Observable.throw(error)
            );
    }

    logout(): void {
        this.setAuthState_(AuthState.LoggedOut);
    }

    emmitAuthState(): void {
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
