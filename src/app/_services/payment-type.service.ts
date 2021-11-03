import { Injectable } from '@angular/core';
import { Payment } from '../_models/Payment.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentTypeService {
  PaymentFunction = [
    { id: 1, name: 'Direct Bank Transfare' },
    { id: 2, name: 'Cheque Payment' },
    { id: 3, name: 'Paypal' },
    { id: 4, name: 'Visa' },
    { id: 5, name: 'Mastercard' },
    { id: 6, name: 'On Dilivery' },
    { id: 7, name: 'Meza' },
  ];
  constructor() {}

  getAllPaymentTypes(): Payment[] {
    return [...this.PaymentFunction];
  }

  getPaymentTypeByID(id: number): Payment | undefined {
    return this.PaymentFunction.find((p) => p.id === id);
  }

  save() {}
  update() {}
  delete() {}
}
