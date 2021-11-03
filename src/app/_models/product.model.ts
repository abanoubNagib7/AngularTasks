import { data } from './data';
import { Payment } from './Payment.model';
import { Tags } from './tag.model';

export interface Product {
  id?: number;
  data: data[];
  price?: number;
  discount?: number;
  paymentFunction: Payment[];
  categoryId?: number;
  tags?: Tags[];
  imagesUrls: string[];
  relatedProductIDs?: number[];
}
