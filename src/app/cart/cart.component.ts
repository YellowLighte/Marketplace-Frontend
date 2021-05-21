import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentUser: any;
  items: any = [];
  order: any;
  productID: number;
  cartTotal: number;


  constructor(private cartService: CartService, private userService: UserService,
              private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Success!', '', {positionClass: 'toast-bottom-center'});
  }

  createOrder(): any {
    this.cartService.createOrder().subscribe( response => {
      this.order = response;
    }, err => console.log(err));
  }

  getOpenOrder(): any {
    this.cartService.getOpenOrder().subscribe( response => {
      this.order = response;
      this.items = this.order.orderProducts;
      this.cartTotal = this.calculateCartPrice(this.items);
    }, err => console.log(err));
  }


  deleteCartItem(cartItemId): any {
    this.cartService.deleteCartItem(cartItemId).subscribe(response => {
      this.getOpenOrder();
      this.showSuccess();
    });
  }

  calculateCartPrice(items): number {
    let total = 0;
    for (let item of items) {
      total += item['product'].price;
    }
    this.cartTotal = total;
    return total;
  }

  ngOnInit(): void {
    this.getOpenOrder();
    if (!this.order) {
      this.createOrder();
    }
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log('Current user: ' + currentUser);
    });
  }

}
