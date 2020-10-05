import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { CartService } from '../../cart.service';
import { CarriersInterface } from '../../carriersInterface';

@Component({
  selector: 'app-carrier-detail',
  templateUrl: './carrier-detail.component.html',
  styleUrls: ['./carrier-detail.component.scss'],
})
export class CarrierDetailComponent implements OnInit {
  ELEMENT_DATA: CarriersInterface[];

  displayedColumns: string[] = ['carrierCode', 'C_MODE', 'C_NAME'];

  carriersList = new MatTableDataSource<CarriersInterface>(this.ELEMENT_DATA);

  constructor(private cartService: CartService) {}

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.carriersList.paginator = this.paginator;
    this.carriersList.sort = this.sort;
    this.getAllCarriers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.carriersList.filter = filterValue.trim().toLowerCase();
  }

  public getAllCarriers() {
    const response = this.cartService.getCarriers();
    response.subscribe(
      (report) => (this.carriersList.data = report as CarriersInterface[])
    );
  }

  // carriersList = new MatTableDataSource<any>(this.cartService.getCarriers());
  // dataSource = new MatTableDataSource(this.carriersList)

  // ngOnInit(): void {
  //   this.cartService.getCarriers().subscribe((result) => {
  //     this.carriersList = result;
  //   });
  // }

  // ngOnInit(): void {
  //    this.carriersList = new MatTableDataSource(this.cartService.getCarriers());
  // }
}
