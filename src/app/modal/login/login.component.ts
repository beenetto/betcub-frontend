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

    formValid: boolean = true;
    message: string;
    title: string;
    submitText: string = 'Login';
    currentPage: string = 'login';

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
        // console.log(this.user.value, this.user.valid);
    }

    makeUserForm(type: string): FormGroup {
        return this.fb.group({
            name: [
                '',
                [ Validators.required, Validators.minLength(2) ]
            ],
            password: [
                '',
                [ Validators.required ]
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
        this.currentPage = tab.name;
    }

    get formMapping(): Object {
        return {
            login: {
                action: this.login,
                submitText: 'Login'
            },
            register: {
                action: this.register,
                submitText: 'Register'
            },
            save: {
                action: this.save,
                submitText: 'Save'
            }
        };
    }

    login() {
        SharedService.INSTANCE.login(
            this.login_user.value.name,
            this.login_user.value.password);
        this.result = true;
        this.close();
    }

    register() {
        console.log('register')
        // SharedService.INSTANCE.login();
        // this.result = true;
        // this.close();
    }

    save() {
        console.log('save')
        // SharedService.INSTANCE.login();
        // this.result = true;
        // this.close();
    }

    submitCurrentForm(): void {
        this.formMapping[this.currentPage].action.call(this);
    }


}
