import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LoginComponent } from './modal/login/login.component';
import { DealCollection } from './model/DealCollection';
import { DialogService } from "ng2-bootstrap-modal";
import { SharedMessages, SharedService } from './services/shared.service';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private _sharedServiceInitiator: SharedService = SharedService.INSTANCE;

	constructor (
        private dialogService: DialogService,
        private userService: UserService,
        private dealCollection: DealCollection
    ) {
        SharedService.INSTANCE.showLogin = this.showLogin;
        SharedService.INSTANCE.userService = this.userService;
        SharedService.INSTANCE.dealCollection = this.dealCollection;
    }

	ngOnInit() {
        SharedService.INSTANCE.sharedMessage.subscribe(
            (message) => {
                if (message === SharedMessages.openLogin) {
                    this.showLogin();
                }
            }
        );
    }

    showLogin() {
        let disposable = this.dialogService
            .addDialog(LoginComponent, {
                title:'Login or register',
                message:''})
            .subscribe((isConfirmed) => {
                if (isConfirmed) {
                    console.log('accepted');
                }
                else {
                    console.log('declined');
                }
            });
        // setTimeout(()=>{
        //     disposable.unsubscribe();
        // },10000);
    }
}
