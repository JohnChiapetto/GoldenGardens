import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product-index/product';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(
    private _http: HttpClient) { }
    private ApiUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product';

  getProducts() : Observable<Product[]> {
    return this._http.get<Product[]>(this.ApiUrl)
    .pipe(
      tap(_=> this.log('fetched products')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }
 private log(msg){
   console.error(msg);
 }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', 'Bearer');
  }
 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
