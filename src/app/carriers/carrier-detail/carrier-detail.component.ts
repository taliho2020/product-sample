import { Component, OnInit } from '@angular/core';

import { CartService } from '../../cart.service';

@Component({
  selector: 'app-carrier-detail',
  templateUrl: './carrier-detail.component.html',
  styleUrls: ['./carrier-detail.component.scss'],
})
export class CarrierDetailComponent implements OnInit {
  carriersList;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.carriersList = this.cartService.getCarriers();
  }
}
