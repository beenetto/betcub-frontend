import { Subscription } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DealCollection } from '../model/DealCollection';
import { Deal } from '../model/deal';


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

  startDate: Date = new Date();
  endDate: Date = new Date();
 
  constructor(public fb: FormBuilder, 
              private collection: DealCollection, 
              private activatedRoute: ActivatedRoute) {}
 
  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
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

            this.deal = this.collection.getDealById(param['id']);

            this.dealForm = this.fb.group({  
              'title': this.deal.title,
              'description': this.deal.description,
              'content': this.deal.content,
              'dateStart': this.deal.dateStart,
              'dateEnd': this.deal.dateEnd
            });
          },
          error => {console.log(error)});
      });
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