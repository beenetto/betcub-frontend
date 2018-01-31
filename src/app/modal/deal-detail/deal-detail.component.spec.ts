/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DealDetailComponent } from './deal-detail.component';
import { DialogService } from 'ngx-bootstrap-modal';

describe('Component: DealDetail', () => {
  it('should create an instance', () => {
    let dialogService: DialogService = null; // new DialogService();
    let component = new DealDetailComponent(dialogService);
    expect(component).toBeTruthy();
  });
});
