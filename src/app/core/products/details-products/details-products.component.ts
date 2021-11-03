import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { PorductService } from 'src/app/_services/productServices.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss'],
})
export class DetailsProductsComponent implements OnInit {
  product!: Product;
  relatedProductArray: Product[] = [];

  constructor(
    private productService: PorductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.params.subscribe((res) => {
      const product = this.productService.getProductByID(+res.id);
      if (!product) {
        alert('Error Happened');
      } else {
        this.product = product;
        this.relatedProductArray = [];
        this.product.relatedProductIDs?.map((productID) => {
          const rProduct = this.productService.getProductByID(productID);
          rProduct && this.relatedProductArray.push(rProduct);
        });
      }
    });
  }
}
