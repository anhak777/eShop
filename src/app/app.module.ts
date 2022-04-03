import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { SharedModule } from './shared/shared.module';
import { WhatShopexOffersComponent } from './home/what-shopex-offers/what-shopex-offers.component';
import { BenefitComponent } from './home/what-shopex-offers/benefit/benefit.component';
import { UniqueFeaturesComponent } from './home/unique-features/unique-features.component';
import { TrendingProductsComponent } from './home/trending-products/trending-products.component';
import { FooterComponent } from './home/footer/footer.component';
import { TopFilterComponent } from './products/top-filter/top-filter.component';

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
    BestSellerComponent,
    WhatShopexOffersComponent,
    BenefitComponent,
    UniqueFeaturesComponent,
    TrendingProductsComponent,
    FooterComponent,
    TopFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
