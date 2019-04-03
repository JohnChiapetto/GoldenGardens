import { Component, OnInit } from '@angular/core';
import {ProductsService } from '../services/products.service';
import { Product } from '../product-index/product';
// import { MatTableDataSource } from '@angular/material';

// import { MatToolbarModule,
//   MatButtonModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatTableModule,
//  } from '@angular/material';



@Component ({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit {
  
  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) => {
      // this.dataSource = new MatTableDataSource<Product>(products);
    });
  }
}

const routes = [
  { path: 'products', component: ProductIndexComponent },
]

// columnNames = ['product_name', 'product_description', 'product_price', 'product_image'];

// dataSource: MatTableDataSource<Product>
