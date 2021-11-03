import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ROUTES } from '@angular/router';
import { AuthGuardService } from '../_services/auth-guard.service';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { DetailsProductsComponent } from './products/details-products/details-products.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';

@NgModule({
  declarations: [
    AddProductsComponent,
    DetailsProductsComponent,
    ProductFilterComponent,
    ProductItemComponent,
    ProductListingComponent,
  ],

  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: 'listing', component: ProductListingComponent },
          { path: 'details/:id', component: DetailsProductsComponent },
          {
            path: 'add',
            component: AddProductsComponent,
            canActivate: [AuthGuardService],
          },
          { path: 'edit/:ProductId', component: AddProductsComponent },
        ],
      },
    ]),
    FormsModule,
    CommonModule,
  ],
  exports: [],
})
export class ProductModule {}
