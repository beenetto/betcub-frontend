/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ContentComponent } from './content.component';
import { LayoutService } from '../services/layout.service';
import { ElementRef } from '@angular/core';

describe('Component: Content', () => {
  it('should create an instance', () => {
    let elementRef: ElementRef = new ElementRef(null);
    let layoutService: LayoutService = null; // new layoutService();
    let component = new ContentComponent(elementRef, layoutService);  // Imchanged
    expect(component).toBeTruthy();
  });
});
