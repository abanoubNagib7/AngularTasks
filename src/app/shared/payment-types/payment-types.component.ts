import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/_models/Payment.model';

@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.scss']
})
export class PaymentTypesComponent implements OnInit {
  PaymentFunction: Payment[];

  constructor() {
      this.PaymentFunction = [
    {id: 1 , name : 'Direct Bank Transfare'},
    {id: 2 , name : 'Cheque Payment'},
    {id: 3 , name : 'Paypal'},
    {id: 4 , name : 'Visa'},
    {id: 5 , name : 'Mastercard'},
    {id: 6 , name : 'On Dilivery'},
  ]
  }

  ngOnInit(): void {
  }

}
