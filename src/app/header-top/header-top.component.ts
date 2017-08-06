import { Component, OnInit } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { LoginComponent } from '../modal/login/login.component';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

    sharedService = SharedService.INSTANCE;

    constructor(private dialogService:DialogService) { }

    set_filter(filter_name: String) { console.log(filter_name); }

    show_login() {
        let disposable = this.dialogService
            .addDialog(LoginComponent, {
                title:'Login or register',
                message:''})
            .subscribe((isConfirmed)=>{
                    if(isConfirmed) {
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

    ngOnInit() {}

}
