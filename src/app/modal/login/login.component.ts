import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { TabsComponent } from '../../tabs/tabs/tabs.component'
import { TabComponent } from '../../tabs/tab/tab.component'


//  LOGIN MODAL
export interface LoginModel {
  title:string;
  message:string;
}

// USER
export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'] })
export class LoginComponent extends DialogComponent<LoginModel, boolean>
                            implements LoginModel, OnInit {

  title: string;
  message: string;
  user: FormGroup;


  constructor(dialogService: DialogService, private fb: FormBuilder) {
    super(dialogService);
  }

  ngOnInit() {
    this.user = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        account: this.fb.group({
            email: ['', Validators.required],
            confirm: ['', Validators.required]
        })
    });

    this.user.patchValue({
        name: 'YOYO'
    });
  }

  onSubmit() {
    console.log(this.user.value, this.user.valid);
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
