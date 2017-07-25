var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-operators';
import { AlertModule, ButtonsModule, DatepickerModule } from 'ng2-bootstrap';
import { LayoutService } from './services/layout.service';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { HomeRightSideComponent } from './home-right-side/home-right-side.component';
import { HomeLeftSideComponent } from './home-left-side/home-left-side.component';
import { WizardComponent } from './wizard/wizard.component';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { ContactComponent } from './contact/contact.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DealListComponent } from './deal-list/deal-list.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { HottestDealsComponent } from './hottest-deals/hottest-deals.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { LoginComponent } from './modal/login/login.component';
import { DealComponent } from './deal/deal.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { DealService } from './services/deal.service';
import { SharedService } from './services/shared.service';
import { DealCollection } from './model/DealCollection';
import { TruncatePipe } from './pipes/truncate';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AddDealComponent,
            AppComponent,
            BasicPageComponent,
            ContactComponent,
            ContentComponent,
            DealListComponent,
            DealDetailComponent,
            DealComponent,
            FeedbackComponent,
            FooterMenuComponent,
            FooterContentComponent,
            FooterComponent,
            HeaderTopComponent,
            HeaderComponent,
            HeaderBottomComponent,
            HomeRightSideComponent,
            HomeLeftSideComponent,
            HomeComponent,
            HottestDealsComponent,
            LoginComponent,
            PageNotFoundComponent,
            RegisterComponent,
            UserSettingsComponent,
            TabComponent,
            TabsComponent,
            TruncatePipe,
            WizardComponent
        ],
        imports: [
            AlertModule.forRoot(),
            BootstrapModalModule.forRoot({ container: document.body }),
            ButtonsModule.forRoot(),
            BrowserModule,
            DatepickerModule.forRoot(),
            FormsModule,
            HttpModule,
            JsonpModule,
            ReactiveFormsModule,
            routing
        ],
        entryComponents: [
            LoginComponent
        ],
        providers: [
            DealCollection,
            DealService,
            LayoutService,
            SharedService
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map