import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details/product-details.component';
import { CartComponent } from './cart/cart/cart.component';
import { ShippingComponent } from './shipping/shipping/shipping.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { PortsListComponent } from './ports/ports-list/ports-list.component';
import { CarrierDetailComponent } from './carriers/carrier-detail/carrier-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CustomerDetailComponent,
    PortsListComponent,
    CarrierDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
