import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { TabsComponent } from '../../tabs/tabs/tabs.component';
import { Tab, TabComponent } from '../../tabs/tab/tab.component';
import { SharedService } from '../../services/shared.service';


//  LOGIN MODEL
export interface LoginModel {
    title:string;
    message:string;
}


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'] })
export class LoginComponent extends DialogComponent<LoginModel, boolean>
                            implements LoginModel, OnInit {

    sharedService = SharedService.INSTANCE;

    title: string;
    message: string;

    user: FormGroup;

    login_user: FormGroup;
    new_user: FormGroup;
    logged_in_user: FormGroup;

    constructor(
            private fb: FormBuilder,
            dialogService: DialogService) {

        super(dialogService);
    }

    ngOnInit() {
        this.user = this.makeUserForm('login');

        this.login_user = this.makeUserForm('login');
        this.logged_in_user = this.makeUserForm('logged_in_user');
        this.new_user = this.makeUserForm('register');
    }

    onSubmit() {
        console.log(this.user.value, this.user.valid);
    }

    makeUserForm(type: string): FormGroup {
        return this.fb.group({
            name: [
                '',
                [ Validators.required, Validators.minLength(2) ]
            ],
            account: this.fb.group({
                email: ['', Validators.required],
                confirm: ['', Validators.required]
            })
        });
    }

    get USER() {
        return SharedService.USER;
    }

    switchContent(tab: Tab) {
        switch(tab.name) {
            case 'login':

            break;

            case 'register':

            break;
            case 'user-settings':
            break;
            default:
            break;
        }
    }

    login() {
        SharedService.INSTANCE.login();
        this.result = true;
        this.close();
    }
}
