import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.css']
})
export class ItemInCartComponent implements OnInit {
  productID: any;
  product: any;
  items: any;

  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService) { }

  addCartItem(productId): any {
    const newItem = {
      quantity: 1
    };
    this.cartService.addCartItem(this.productID, newItem).subscribe(response => {
      this.items = [...this.items, response];
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.productID = params.get('id');
        // this.cartService.addCartItem(this.productID,).subscribe(response => {
        //   this.product = response;
        // });
      });
  }

}
