import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { PorductService } from 'src/app/_services/productServices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 arrayOfProducts: Product[] = [];
  cartIsOpen: boolean = false;

  constructor(private productService: PorductService) { }

  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next) => {
        this.arrayOfProducts.push(next)
        console.log(next)
      },

      (error) => {

      },

      () => {

        }
   )
  }
}
