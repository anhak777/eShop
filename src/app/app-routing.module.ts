import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemBoxListComponent } from './Shared/product-item-box-list/product-item-box-list.component';
import { ProductItemBoxComponent } from './Shared/product-item-box/product-item-box.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


// const itemRoutes: Routes = [
//   { path: 'grid', component: ProductItemBoxComponent},
//   { path: 'list', component: ProductItemBoxListComponent}
// ]

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about-us', component: AboutComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'login', component: LoginComponent},
  //{ path: 'wishlist', component: },
  { path: 'shopping-cart', component: ShoppingCartComponent},
  



  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
