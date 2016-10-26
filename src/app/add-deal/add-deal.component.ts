import { Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DealCollection } from '../model/DealCollection';
import { Deal } from '../model/deal';
import { DealService } from '../services/deal.service';


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
	styleUrls: ['./add-deal.component.css']

})  
export class AddDealComponent implements OnInit, OnDestroy { 

  private linkSubscription: Subscription;
  private deal: Deal;
  private dealForm: FormGroup;
  private isEdit: Boolean = false;
  private pageTitle: String = "Add new deal";
  private submitText: String = "Add";

  startDate: Date = new Date();
  endDate: Date = new Date();
 
  constructor(public fb: FormBuilder,
              private collection: DealCollection, 
              private activatedRoute: ActivatedRoute) {}

 
  onSubmit(value: string): void {

    // value['culture'] = {
    //   name: "Base language", 
    //   isoCode: "en", 
    //   self: "api/globalizations/cultures/00000000-0000-0000-0000-000000000000"
    // };

    value['category'] = {
      name: "Betting", 
      self: "api/deals/categories/00000000-0000-0000-0000-000000000000"
    };

    if (this.isEdit) {
      value['id'] = this.deal.id;
      this.collection.saveDeal(value);
    } else {
      this.collection.addDeal(value);
    }

    console.log(value);
  }

  remove(): void {
    this.collection.removeDeal(this.deal.id);
  }

  ngOnInit() {
    this.dealForm = this.fb.group({  
      'title': '',
      'description': '',
        'content': '',
        'dateStart': '',
        'dateEnd': ''  
    });  

    this.linkSubscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.collection.stream.subscribe(
          value => {
            if (param['id']) {
              this.isEdit = true;
              this.deal = this.collection.getDealById(param['id']);
              this.pageTitle = 'Edit ' + this.deal.title;
              this.submitText = 'Save';

              this.dealForm = this.fb.group({  
                'title': this.deal.title,
                'description': this.deal.description,
                'content': this.deal.content,
                'dateStart': this.deal.dateStart,
                'dateEnd': this.deal.dateEnd
              });
            }
          },
          error => {console.log(error)});
      });
    if (this.collection.getAll().length) {
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