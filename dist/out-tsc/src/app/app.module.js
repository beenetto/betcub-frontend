var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-operators';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';
import { ImageUploadModule } from 'angular2-image-upload';
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
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DealListComponent } from './deal-list/deal-list.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { HottestDealsComponent } from './hottest-deals/hottest-deals.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { DealComponent } from './deal/deal.component';
import { DealService } from './services/deal.service';
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
            AppComponent,
            PageNotFoundComponent,
            HomeComponent,
            HeaderComponent,
            FooterComponent,
            ContentComponent,
            FeedbackComponent,
            ContactComponent,
            AboutUsComponent,
            PrivacyPolicyComponent,
            TermsAndConditionsComponent,
            AddDealComponent,
            RegisterComponent,
            UserSettingsComponent,
            DealListComponent,
            DealDetailComponent,
            FooterMenuComponent,
            FooterContentComponent,
            HeaderTopComponent,
            HeaderBottomComponent,
            HomeRightSideComponent,
            HomeLeftSideComponent,
            DealComponent,
            WizardComponent,
            HottestDealsComponent,
            TruncatePipe
        ],
        imports: [
            ImageUploadModule.forRoot(),
            AlertModule.forRoot(),
            BrowserModule,
            DatepickerModule.forRoot(),
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            JsonpModule,
            routing
        ],
        providers: [DealCollection, DealService, LayoutService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../../src/app/app.module.js.map