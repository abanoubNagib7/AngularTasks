import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/add-product.model';
import { Payment } from 'src/app/_models/Payment.model';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { PorductService } from 'src/app/_services/productServices.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss'],
})
export class AddProductsComponent implements OnInit {
  categories!: Category[];
  paymentType!: Payment[];
  product = <Product>{};
  isEditMode = false;

  @ViewChild('myForm') form!: ElementRef;
  // @ViewChild('txtInput') nameInput!: ElementRef;

  constructor(
    private categoryService: CategoryService,
    private paymentTypeService: PaymentTypeService,
    private porductService: PorductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.product = {
      data: [{}],
      paymentFunction: [],
      tags: [],
      imagesUrls: [],
    };
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((res) => {
      console.log(res);
    });
    this.paymentType = this.paymentTypeService.getAllPaymentTypes();

    const ProductId = this.activatedRoute.snapshot.params.ProductId;
    if (ProductId) {
      const product = this.porductService.getProductByID(+ProductId);
      // this.product = { ...product };
      this.isEditMode = true;
    }
  }

  onSubmit(form: NgForm, txtInput: NgModel) {
    // const cate = this.categoryService.getCategoryByID(+form.value.category);
    // if (cate) {
    //   this.product.category = cate;
    // }

    this.product.paymentFunction = [];
    for (let index = 0; index < this.paymentType.length; index++) {
      if (form.value['check_' + index]) {
        this.product.paymentFunction.push(this.paymentType[index]);
      }
    }

    if (this.isEditMode) {
      this.porductService.updateProduct(this.product);
    } else {
      this.porductService.addProduct(this.product).subscribe((res) => {
        console.log(res);
      });
    }

    this.router.navigateByUrl('home');
    // this.porductService.addProduct(this.product);
    this.router.navigateByUrl('home');
    console.log(this.product);
    console.log(form);
    console.log('txtInput', txtInput);
  }

  onTagAdded(tagInput: HTMLInputElement) {
    if (!this.product.tags) {
      this.product.tags = [];
    }
    this.product.tags?.push({ name: tagInput.value });
    tagInput.value = '';
  }
}
