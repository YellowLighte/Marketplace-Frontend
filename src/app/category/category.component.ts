import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { CartService } from '../services/cart/cart.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: any;
  categoryID: string;
  products: [];
  // category$: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService,
              private cartService: CartService, private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Success!', '', {positionClass: 'toast-bottom-center'});
  }

  getProductsbyCategoryId(categoryID): any {
    this.categoryService.getProductsbyCategoryId(categoryID).subscribe( response => {
      this.products = response;
    }, err => console.log(err));
  }

  addCartItem(productId): any {
    const newCartItem = {
      quantity: 1
    };
    // console.log('The newCartItem being passed in: ' + newCartItem.quantity);
    this.cartService.addCartItem(productId, newCartItem).subscribe(response => {
      // console.log('Response: ' + response);
      this.showSuccess();
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe( params => {
        this.categoryID = params.get('id');
        this.categoryService.getCategory(this.categoryID).subscribe(response => {
          this.category = response;
          this.getProductsbyCategoryId(this.categoryID);
        });
      });
  }

}
