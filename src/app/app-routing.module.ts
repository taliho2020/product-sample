import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrierDetailComponent } from './carriers/carrier-detail/carrier-detail.component';
import { CartComponent } from './cart/cart/cart.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { PortsListComponent } from './ports/ports-list/ports-list.component';
import { ProductDetailsComponent } from './product-details/product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ShippingComponent } from './shipping/shipping/shipping.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'customer', component: CustomerDetailComponent },
  { path: 'ports', component: PortsListComponent },
  { path: 'carriers', component: CarrierDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
