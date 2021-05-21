import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import {ItemInCartComponent} from './item-in-cart/item-in-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'categories', component: CategoriesComponent,
    children: [
      {
        path: ':id',
        component: CategoryComponent,
      }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent,
    children: [
      {
        path: ':id',
        // component: CartComponent
        component: ItemInCartComponent,
      }
    ] },
  // { path: 'cart', component: CartComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
