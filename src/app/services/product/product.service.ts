import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const herokuUrl = 'https://radiant-hamlet-21410.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // getProductsbyCategoryId(categoryID): any {
  //   return this.http
  //     .get(`${herokuUrl}/api/${categoryID}/products`);
  // }

  getAllProducts(): any {
    return this.http
      .get(`${herokuUrl}/api/products/`);
  }
}
