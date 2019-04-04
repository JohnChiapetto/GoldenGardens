import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductIndexComponent } from './product-index/product-index.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { from } from 'rxjs';

const routes = [
  {path: 'products', component: ProductIndexComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductIndexComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],

  providers: [
    ProductsService 
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
