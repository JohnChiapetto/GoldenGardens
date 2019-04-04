import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://efa-gardenapp-backend.herokuapp.com/api/product') //*{headers: this.getHeaders()*// }
  }

 }
//   private getHeaders() {
//     return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
//   }
// }
