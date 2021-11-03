import { Component } from '@angular/core';
import { Product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productOfArray: Product[] = [];
  buttonClicked = 'app-listing';
  // exProduct =

  title = 'firstAngular';

//  output(product : Product) {
//     this.productOfArray.push(product);
//   }
}
