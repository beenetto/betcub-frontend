import {Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DealCollection } from '../model/DealCollection';
import { Deal } from '../model/Deal';


import {  
	FormControl,
  	FormBuilder,  
  	FormGroup  
} from '@angular/forms';
 
@Component({  
	selector: 'app-add-deal',
	templateUrl: './add-deal.component.html',
	styleUrls: ['./add-deal.component.css']

})  
export class AddDealComponent implements OnInit, OnDestroy { 

  private linkSubscription: Subscription;
  private deal: Deal;

  myForm: FormGroup;
 
  constructor(public fb: FormBuilder, 
              private collection: DealCollection, 
              private activatedRoute: ActivatedRoute) {

    this.myForm = fb.group({  
      'sku': ['ABC123']  
    });  
  }
 
  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
  }

  ngOnInit() {
    this.linkSubscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.collection.stream.subscribe(
          value => {
            this.deal = this.collection.getDealById(param['id']);
            console.log(this.deal); 
          },
          error => {console.log(error)});
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.linkSubscription.unsubscribe();
  }
}