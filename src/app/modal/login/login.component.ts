import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { TabsComponent } from '../../tabs/tabs/tabs.component'
import { TabComponent } from '../../tabs/tab/tab.component'


//  LOGIN MODAL
export interface LoginModel {
  title:string;
  message:string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'] })
export class LoginComponent extends DialogComponent<LoginModel, boolean>
                            implements LoginModel {

  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  switchContent() {
      
  }

  login() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }
}
