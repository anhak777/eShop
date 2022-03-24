import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeadingBarComponent } from './heading-bar/heading-bar.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { LeatestProductsComponent } from './home/leatest-products/leatest-products.component';
import { NewArrivalComponent } from './home/leatest-products/new-arrival/new-arrival.component';
import { BestSellerComponent } from './home/leatest-products/best-seller/best-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PagesComponent,
    ProductsComponent,
    BlogComponent,
    ShopComponent,
    ContactComponent,
    NotFoundComponent,
    HeadingBarComponent,
    HeroSectionComponent,
    FeaturedProductsComponent,
    LeatestProductsComponent,
    NewArrivalComponent,
    BestSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
