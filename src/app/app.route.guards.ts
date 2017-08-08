import { AddDealComponent } from './add-deal/add-deal.component';
import { Injectable, ModuleWithProviders } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanDeactivate,
    Router,
    Routes,
    RouterStateSnapshot } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import { SharedService } from './services/shared.service';



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot ): Observable<boolean> | boolean {
        if (!SharedService.INSTANCE.loggedIn) {
                this.router.navigate(["home"]);
                setTimeout(
                    () => SharedService.INSTANCE.openLogin(),
                    1000
                );
            return false;
        }
        return SharedService.INSTANCE.loggedIn;
    }
}

@Injectable()
export class AddDealDeactivateGuard
    implements CanDeactivate<AddDealComponent> {

  canDeactivate(target: AddDealComponent) {
    if(target.hasChanges()){
        return window.confirm('Do you really want to cancel?');
    }
    return true;
  }
}
