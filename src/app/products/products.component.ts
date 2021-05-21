import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categoryID: number;
  products: [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  // getProductsbyCategoryId(categoryID): any {
  //   this.productService.getProductsbyCategoryId(categoryID).subscribe( response => {
  //     this.products = response;
  //     console.log('Response from getProductsbyCategoryId in ProductsComponent: ' + response);
  //   }, err => console.log(err));
  // }

  getAllProducts(): any {
    this.productService.getAllProducts().subscribe( response => {
      this.products = response;
      console.log('Response from getProductsbyCategoryId in ProductsComponent: ' + response);
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getAllProducts();
    // this.getProductsbyCategoryId(this.categoryID);
  }

}
