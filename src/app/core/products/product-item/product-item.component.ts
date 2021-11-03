import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { PorductService } from 'src/app/_services/productServices.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  // @Output() itemAdded = new EventEmitter<any>();

  arr: Product[] = [];
  constructor(private productService: PorductService) {
    // this.product = {
    //   name: 'Labtop' ,
    //   price: 900,
    //   imgUrl: 'assets/img/layout-styles.png',
    //   discount: 500
    // }
  }

  ngOnInit(): void {}

  getPrice() {
    return this.product.price
      ? this.product.discount
        ? this.product.price - this.product.discount
        : this.product.price
      : 0;
  }

  itemAddedToCart() {
    this.productService.itemAdded.emit(this.product);
    console.log(this.product);
  }

  delete(id: number | undefined) {
    this.productService.deleteProduct(id);
  }
}
