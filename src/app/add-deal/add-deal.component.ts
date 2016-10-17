import { Component } from '@angular/core';

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
export class AddDealComponent {  
  myForm: FormGroup;
 
  constructor(fb: FormBuilder) {  
    this.myForm = fb.group({  
      'sku': ['ABC123']  
    });  
  }
 
  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
  }
}