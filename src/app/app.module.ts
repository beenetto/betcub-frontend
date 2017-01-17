import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-operators';


// UI
import { AlertModule,
         DropdownModule,
         PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { LayoutService } from './services/layout.service';

import { DatePickerModule } from 'ng2-datepicker';

// ROUTING
import { routing }  from './app.routing';

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

  import { ContactComponent } from './contact/contact.component';  // PAGE
  import { AboutUsComponent } from './about-us/about-us.component';  // PAGE
  import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'; // PAGE
  import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component'; // PAGE
  import { UserSettingsComponent } from './user-settings/user-settings.component'; // PAGE
  import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // PAGE

   // DEALS
  import { DealListComponent } from './deal-list/deal-list.component'; // PAGE COMPONENT
  import { DealDetailComponent } from './deal-detail/deal-detail.component'; // PAGE
  import { AddDealComponent } from './add-deal/add-deal.component'; // PAGE
  import { HottestDealsComponent } from './hottest-deals/hottest-deals.component';

// FOOTER
import { FooterComponent } from './footer/footer.component';  // MAIN TEMPLATE COMPONENT
import { FooterMenuComponent } from './footer-menu/footer-menu.component'; // PAGE COMPONENT
import { FooterContentComponent } from './footer-content/footer-content.component'; // PAGE COMPONENT


// MODAL
import { FeedbackComponent } from './feedback/feedback.component'; // MODAL COMPONENT
import { RegisterComponent } from './register/register.component';
import { DealComponent } from './deal/deal.component'; // MODAL COMPONENT

// Common models and collections
import { DealService } from './services/deal.service';
import { DealCollection } from './model/DealCollection';

// PIPES
import {TruncatePipe} from './pipes/truncate';

@NgModule({
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
    // Models
    // Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    routing,
    // UI COMPONENTS
    DatePickerModule,
    DropdownModule,
    PaginationModule
  ],
  providers: [DealCollection, DealService, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
