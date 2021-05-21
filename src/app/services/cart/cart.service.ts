import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserService} from '../user/user.service';

const herokuUrl = 'https://radiant-hamlet-21410.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // allOrders: [];
  // openOrder: any;
  // closedOrders: [];

  constructor(private http: HttpClient, private userService: UserService) { }

  getOrders(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/orders`, requestOptions);
  }

  getOrder(orderId): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/orders/${orderId}`, requestOptions);
  }

  createOrder(): any {
    const newOrder = {
      orderDate: new Date(),
      orderComplete: 'false'
    };
    console.log(newOrder);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/orders`, newOrder, requestOptions);
  }

  // getOrderById(orderId): any {
  //   const token = localStorage.getItem('token');
  //   const requestOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: `Bearer ${token}`
  //     }),
  //   };
  //   return this.http
  //     .get(`${herokuUrl}/api/orders/${orderId}`);
  // }

  addCartItem(productId, newCartItem): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    // console.log('addCartItem called from cart.services. Product id: ' + productId);
    // console.log('addCartItemcalled from cart.services. newcartitem: ' + newCartItem);
    return this.http
      .post(`${herokuUrl}/api/cart/${productId}`, newCartItem, requestOptions);
  }

  getOpenOrder(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/orders/open`, requestOptions);
  }

  deleteCartItem(cartItemId): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .delete(`${herokuUrl}/api/cart/${cartItemId}`, requestOptions);
  }


}
