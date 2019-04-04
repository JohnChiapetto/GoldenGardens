import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product-index/product';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const ApiUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product';

@Injectable()

export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
  return this._http.get(`${ApiUrl}/Products`, //*{headers: this.getHeaders()*// }
  );
  }
 }
//   private getHeaders() {
//     return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
//   }
// }