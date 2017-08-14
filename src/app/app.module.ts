import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AlertModule, BsDropdownModule, DatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-operators';

// UI
import { ButtonsModule } from 'ng2-bootstrap';
import { LayoutService } from './services/layout.service';

// ROUTING
import { routing }  from './app.routing';
import { AddDealDeactivateGuard, AuthGuard } from './app.route.guards';

 // APP
import { AppComponent } from './app.component';

// HEADER
import { HeaderComponent } from './header/header.component'; // MAIN TEMPLATE COMPONENT
  import { HeaderTopComponent } from './header-top/header-top.component'; // PAGE COMPONENT
  import { HeaderBottomComponent } from './header-bottom/header-bottom.component'; // PAGE COMPONENT

// CONTENT
import { ContentComponent } from './content/content.component'; // MAIN TEMPLATE COMPONENT

  // HOME
  import { HomeComponent } from './home/home.component'; // PAGE
    import { HomeRightSideComponent } from './home-right-side/home-right-side.component'; // PAGE COMPONENT
    import { HomeLeftSideComponent } from './home-left-side/home-left-side.component'; // PAGE COMPONENT
    import { WizardComponent } from './wizard/wizard.component'; // PAGE COMPONENT

  import { BasicPageComponent } from './basic-page/basic-page.component' // BASIC PAGE FOR SEMI STATIC CONTENT
  import { ContactComponent } from './contact/contact.component';  // PAGE

  import { UserSettingsComponent } from './user-settings/user-settings.component'; // PAGE
  import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // PAGE

   // DEALS
  import { DealListComponent } from './deal-list/deal-list.component'; // PAGE COMPONENT
  import { DealDetailComponent } from './modal/deal-detail/deal-detail.component'; // PAGE
  import { AddDealComponent } from './add-deal/add-deal.component'; // PAGE
  import { HottestDealsComponent } from './hottest-deals/hottest-deals.component';

// FOOTER
import { FooterComponent } from './footer/footer.component';  // MAIN TEMPLATE COMPONENT
import { FooterMenuComponent } from './footer-menu/footer-menu.component'; // PAGE COMPONENT
import { FooterContentComponent } from './footer-content/footer-content.component'; // PAGE COMPONENT


// MODAL
import { LoginComponent } from './modal/login/login.component'
import { DealComponent } from './deal/deal.component';

import { FeedbackComponent } from './feedback/feedback.component'; // MODAL COMPONENT

// TabsComponent
import { TabsComponent } from './tabs/tabs/tabs.component'
import { TabComponent } from './tabs/tab/tab.component'

// Common models and collections
import { DealService } from './services/deal.service';
import { SharedService } from './services/shared.service';
import { UserService } from './services/user.service';
import { DealCollection } from './model/DealCollection';

// PIPES
import {TruncatePipe} from './pipes/truncate';

@NgModule({
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
        UserSettingsComponent,
        TabComponent,
        TabsComponent,
        TruncatePipe,
        WizardComponent
    ],
    imports: [
        AlertModule.forRoot(),
        BootstrapModalModule.forRoot({container:document.body}),
        BsDropdownModule.forRoot(),
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
        DealDetailComponent,
        LoginComponent
    ],
    providers: [
        AddDealDeactivateGuard,
        AuthGuard,
        DealCollection,
        DealService,
        LayoutService,
        SharedService,
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
