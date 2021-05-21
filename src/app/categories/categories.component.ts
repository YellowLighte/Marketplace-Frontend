import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categorie$: Observable<any>;
  categories: [] = this.getCategories();
  categoryID: number;


  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  getCategories(): any {
    this.categoryService.getCategories().subscribe( response => {
      this.categories = response;
      console.log('Response from getCategories in CategoriesComponent: ' + response);
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
