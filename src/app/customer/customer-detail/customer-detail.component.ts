import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnInit {
  customerDetailForm;

  constructor(private fb: FormBuilder) {
    this.customerDetailForm = this.fb.group({
      name: '',
      company: '',
      address1: '',
      address2: '',
      state: '',
      country: '',
      email: '',
      telNo: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(customerData) {
    this.customerDetailForm.reset();

    console.warn('Your customer details are:', customerData);
  }
}
