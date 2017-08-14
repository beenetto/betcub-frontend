
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Deal } from '../model/deal';
import * as moment from 'moment';
import { DealCollection } from '../model/DealCollection';
import { TabsComponent } from '../tabs/tabs/tabs.component'
import { TabComponent } from '../tabs/tab/tab.component'


@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-add-deal',
	templateUrl: './add-deal.component.html',
	styleUrls: ['./add-deal.component.css'] })

export class AddDealComponent implements OnInit, OnDestroy {

    deal: Deal = new Deal();
    dealForm: FormGroup;
    isEdit: Boolean = false;

	min_start_date;
	min_end_date;

    constructor(public formBuilder: FormBuilder,
				private cdRef: ChangeDetectorRef,
                private collection: DealCollection,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
        this.isEdit = activatedRoute.snapshot
            .url[0].path == 'edit-deal';

		this.min_start_date = new Date();
		this.min_end_date = moment(this.min_start_date)
			.add(1, 'day').toDate();
    }

    ngOnInit() {

        this.dealForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(2)]],
            content: ['', [Validators.required, Validators.minLength(2)]],
            link: ['', [Validators.required, Validators.minLength(2)]]
        });

		this.deal.dateStart = this.min_start_date;
		this.deal.dateEnd = this.min_end_date;

        if (this.isEdit) {
			this.collection
				.getDeal(this.activatedRoute.snapshot.params['id'])
				.map(deal => {
					deal.dateStart = new Date(deal.dateStart);
					deal.dateEnd = new Date(deal.dateEnd);
					return deal;
				})
				.subscribe(deal => {
					this.deal = deal;
					this.dealForm.patchValue(this.deal);
				});
		}
    }

    setPage(page: string): void{

    }

    activeDateChange(): void {
		let start = moment(this.deal.dateStart);
		let offset_one = moment(start).add(1, 'day').toDate();
		this.min_end_date = offset_one;

		if (moment(this.deal.dateEnd).diff(start) < 86400000) {
			this.deal.dateEnd = offset_one;
		}

		this.cdRef.detectChanges();
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

	hasChanges() {
		return true;
	}

    ngOnDestroy() {}

}
