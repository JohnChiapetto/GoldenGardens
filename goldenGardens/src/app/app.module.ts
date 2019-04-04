import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductIndexComponent } from './product-index/product-index.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { IndexComponent } from './index/index.component';

const routes = [
  {path: 'products', component: ProductIndexComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductIndexComponent,
    IndexComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    ProductsService
  ],
  bootstrap: [
    AppComponent,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ]
 
})
export class AppModule { }
