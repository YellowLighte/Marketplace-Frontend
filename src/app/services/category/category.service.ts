import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const herokuUrl = 'https://radiant-hamlet-21410.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): any {
    return this.http
      .get(`${herokuUrl}/api/categories`);
  }

  getCategory(categoryID): any {
    return this.http
      .get(`${herokuUrl}/api/categories/${categoryID}`);
  }

  getProductsbyCategoryId(categoryID): any {
    return this.http
      .get(`${herokuUrl}/api/${categoryID}/products`);
  }

}
