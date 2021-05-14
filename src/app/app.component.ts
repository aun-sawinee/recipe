import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styles: []
})

export class AppComponent implements OnInit {
 @ViewChild('productList')
productList: ProductListComponent;

constructor() {
  }

ngOnInit(): void {

 }



}

