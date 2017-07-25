
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Deal } from '../model/deal';
import { DealCollection } from '../model/DealCollection';
import { TabsComponent } from '../tabs/tabs/tabs.component'
import { TabComponent } from '../tabs/tab/tab.component'
import { Subscription } from 'rxjs';

import {
    FormControl,
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';

@Component({
	selector: 'app-add-deal',
	templateUrl: './add-deal.component.html',
	styleUrls: ['./add-deal.component.css'] })

export class AddDealComponent implements OnInit, OnDestroy {

    public afterTomorrow: Date;
    public dt: Date = new Date();
    public events: any[];
    public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD',
                                'DD.MM.YYYY', 'shortDate'];
    public format: string = this.formats[0];
    public today: Date = new Date();
    public tomorrow: Date;

    linkSubscription: Subscription;
    deal: Deal;
    dealForm: FormGroup;
    isEdit: Boolean = false;
    pageTitle: String = "Add new deal";
    submitText: String = "Add";

    startDate: Date = new Date();
    startDateOn: Number = 0;
    endDate: Date = new Date();

    constructor(
        public fb: FormBuilder,
        private collection: DealCollection,
        private activatedRoute: ActivatedRoute,
        private router: Router) {}


    setPage(page: string): void{

    }

    onSubmit(_deal: Deal): void {
        // EDIT DEAL
        if (this.isEdit) {
            _deal.id = this.deal.id;
            this.collection.saveDeal(_deal).subscribe(
                dealStream => {
                    console.log("DEAL SAVED");
                    for (let prop in _deal) {
                        this.deal[prop] = _deal[prop];
                    }
                    this.router.navigate(["home"]);
                },
                error =>  {
                // this.errorMessage = <any>error;
            });
        } else {
          // ADD DEAL
            this.collection.addDeal(_deal).subscribe(
                dealStream => {
                    console.log("DEAL ADDED");
                    this.router.navigate(["home"]);
                },
                error =>  {
                    //this.errorMessage = <any>error;
                }
            );
        }
    }

    // DELETE DEAL
    remove(): void {
        this.collection.removeDeal(this.deal.id).subscribe(
            dealStream => {
                console.log("DEAL DELETED");
                this.collection.getDeals();
                this.router.navigate(["home"]);
            },
            error =>  {
                // this.errorMessage = <any>error;
            }
        );
    }

    ngOnInit() {
        this.dealForm = this.fb.group({
            'content': '',
            'dateStart': '',
            'dateEnd': '',
            'description': '',
            'link': '',
            'title': '',
        });

        this.linkSubscription = this.activatedRoute.params.subscribe(
            (params: any) => {
                console.log(params)
                this.collection.stream.subscribe(
                    value => {
                    if (params['id']) {
                        this.isEdit = true;
                        this.deal = this.collection.getDealById(params['id']);
                        this.pageTitle = this.deal.title;
                        this.submitText = 'Save';

                        this.dealForm = this.fb.group({
                            'title': this.deal.title,
                            'link': this.deal.link,
                            'content': this.deal.content,
                            'dateStart': this.deal.dateStart,
                            'dateEnd': this.deal.dateEnd,
                            'temperature': this.deal.temperature,
                        });
                    }
              },
              error => {
                  console.log(error);
              });
            }
        );

        if (this.collection.deals.length) {
            this.collection.refresh();
        }
    }

    onStartDateChange(value) {
        console.log(value);
    }

    onEndDateChange(value) {
        console.log(value);
    }

    ngOnDestroy() {
    // prevent memory leak by unsubscribing
        this.linkSubscription.unsubscribe();
    }
}
