import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment'; 

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  items;
  checkoutForm;

  

  constructor( private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      amount: ''
    });
   }

  ngOnInit(): void {
  }

  
  onSubmit(customerData) {
    // Process checkout data here
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

  get diagnostic() { return JSON.stringify(this.checkoutForm.value); }


  get amount() 
  { 
    return (this.checkoutForm.value.amount); 
  }


}
