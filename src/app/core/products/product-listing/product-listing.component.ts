import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { filter } from 'src/app/_models/Filter.model';
import { Product } from 'src/app/_models/product.model';
import { PorductService } from 'src/app/_services/productServices.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  @Input() ProductListArray!: Product[];
  @Input() PageSize: number = 9;
  filterListArray: filter[];
  // @Output() outputItem :  EventEmitter<Product>;
  numbersOfPagesarr: number[] = [];
  productArrayViewed: Product[] = [];
  currentPage: number = 0;

  constructor(private porductService: PorductService) {
    // this.outputItem = new EventEmitter<Product>();
    this.filterListArray = [
      { name: 'Arts & Carfts' },
      { name: 'Automative' },
      { name: 'Baby' },
      { name: 'Books' },
      { name: 'Electronics' },
      { name: "Women's Fashion" },
      { name: "Men's Fashion" },
      { name: 'Health & HouseHold' },
      { name: 'Home & Kitchen' },
      { name: 'Military Accessories' },
    ];
  }

  ngOnInit(): void {
    this.porductService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.ProductListArray = res.product;
      this.sliceArray();
      this.calcnumofPages();
    });

    this.porductService.productChanged.subscribe((response) => {
      this.ProductListArray = response;
    });

    this.porductService.itemDeleted.subscribe((next) => {
      this.ProductListArray = next;
      this.sliceArray();
    });

    this.sliceArray();
  }

  calcnumofPages() {
    const numbersOfPagesarr = Math.ceil(
      this.ProductListArray.length / this.PageSize
    );

    for (let index = 0; index < numbersOfPagesarr; index++) {
      this.numbersOfPagesarr.push(index + 1);
    }
  }

  newItemAdded(product: Product) {
    // this.outputItem.emit(product);
  }

  sliceArray() {
    this.productArrayViewed = this.ProductListArray.slice(
      this.currentPage * this.PageSize,
      this.currentPage * this.PageSize + this.PageSize
    );
  }

  onPagination(i: number) {
    if (i > -1 && i < this.numbersOfPagesarr.length) {
      this.currentPage = i;
      this.sliceArray();
    }
  }

  arr: Product[] = [];

  @ViewChild('inputs') Inputs!: ElementRef;
  search() {
    if ((this.Inputs.nativeElement as HTMLInputElement).value == '') {
      this.porductService.getAllProducts().subscribe((res) => {});
    } else {
      for (let i = 0; i < this.ProductListArray.length; i++) {
        if (
          this.ProductListArray[i].data[0].name ===
          (this.Inputs.nativeElement as HTMLInputElement).value
        ) {
          this.arr.push(this.ProductListArray[i]);
        }
      }
      this.ProductListArray = this.arr;
    }
    this.sliceArray();
    this.calcnumofPages();
    this.onPagination(1);
  }
}
