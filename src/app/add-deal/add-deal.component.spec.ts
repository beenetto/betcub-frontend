/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AddDealComponent } from './add-deal.component';
import { FormBuilder } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DealCollection } from '../model/DealCollection';
import { DealService } from '../services/deal.service';

describe('Component: AddDeal', () => {
  it('should create an instance', () => {
    let formBuilder: FormBuilder = new FormBuilder();
    let changeDetectorRef: ChangeDetectorRef = null;
    let activatedRoute: ActivatedRoute = new ActivatedRoute();
    let router: Router = null; //new Router();
    let dealService: DealService = new DealService(null);
    let dealCollection: DealCollection = new DealCollection(dealService);
    let component = new AddDealComponent(formBuilder, changeDetectorRef, dealCollection, activatedRoute, router); // IMchanged 
    expect(component).toBeTruthy();
  });
});
