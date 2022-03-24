import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop/shop.component';
import { NewArrivalComponent } from './home/leatest-products/new-arrival/new-arrival.component';
import { BestSellerComponent } from './home/leatest-products/best-seller/best-seller.component';

const routes: Routes = [
  {path:'', 
  component: HomeComponent,
  children: [
    {
      path:'', redirectTo:'newarrival', pathMatch:'full'
    },
    {
      path:'newarrival', component: NewArrivalComponent 
    },
    {
      path:'bestseller', component: BestSellerComponent 
    }
  ]
},

  {path:'pages', component: PagesComponent},
  {path:'products', component: ProductsComponent},
  {path:'blog', component: BlogComponent},
  {path:'shop', component: ShopComponent},
  {path:'contact', component: ContactComponent},
  {path:'**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
