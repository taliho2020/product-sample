import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-ports-list',
  templateUrl: './ports-list.component.html',
  styleUrls: ['./ports-list.component.scss'],
})
export class PortsListComponent implements OnInit {
  portsList;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.portsList = this.cartService.getPorts();
  }
}
