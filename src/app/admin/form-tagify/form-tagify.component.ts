import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tagify',
  templateUrl: './form-tagify.component.html',
  styleUrls: ['./form-tagify.component.css']
})
export class FormTagifyComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private _formBuilder :FormBuilder) {
    this.checkoutForm = this._formBuilder.group({
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
