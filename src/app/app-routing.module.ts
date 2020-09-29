import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { ProductDetailsComponent } from './product-details/product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ShippingComponent } from './shipping/shipping/shipping.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'customer', component: CustomerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
