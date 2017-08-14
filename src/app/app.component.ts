import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DealDetailComponent } from './modal/deal-detail/deal-detail.component';
import { LoginComponent } from './modal/login/login.component';
import { Deal } from './model/Deal';
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
                switch(message) {
                    case SharedMessages.openDeal:
                        this.openDeal();
                    break;
                    case SharedMessages.openLogin:
                        this.showLogin();
                    break;
                }
            }
        );
    }

    showLogin(): void {
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

    openDeal(): void {
        let disposable = this.dialogService
            .addDialog(
                DealDetailComponent,
                SharedService.INSTANCE.currentDeal
            )
            .subscribe((isConfirmed) => {
                if (isConfirmed) {
                    console.log('accepted');
                }
                else {
                    console.log('declined');
                }
            });
    }
}
