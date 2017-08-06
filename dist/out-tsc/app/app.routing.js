import { RouterModule } from '@angular/router';
import { AddDealDeactivateGuard, AuthGuard } from './app.route.guards';
import { AddDealComponent } from './add-deal/add-deal.component';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { ContactComponent } from './contact/contact.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about-us', component: BasicPageComponent },
    { path: 'privacy-policy', component: BasicPageComponent },
    { path: 'terms-and-conditions', component: BasicPageComponent },
    { path: 'add-deal', component: AddDealComponent, canActivate: [AuthGuard], canDeactivate: [AddDealDeactivateGuard] },
    { path: 'edit-deal/:id', component: AddDealComponent, canActivate: [AuthGuard] },
    { path: 'deal-detail/:id', component: DealDetailComponent, canActivate: [AuthGuard] },
    { path: 'user-settings/:id', component: UserSettingsComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent }
];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=../../../src/app/app.routing.js.map