import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSliderComponent } from './home/main-slider/main-slider.component';
import { ShopGridDefaultComponent } from './shop-grid-default/shop-grid-default.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './Shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
import { LatestProductsComponent } from './home/latest-products/latest-products.component';
import { WhatWeOfferComponent } from './home/what-we-offer/what-we-offer.component';
import { UniqueFeaturesComponent } from './home/unique-features/unique-features.component';
import { TrendingProductsComponent } from './home/trending-products/trending-products.component';
import { DiscountItemComponent } from './home/discount-item/discount-item.component';
import { TopCategoriesComponent } from './home/top-categories/top-categories.component';
import { SubscribeUsComponent } from './home/subscribe-us/subscribe-us.component';
import { LatestBlogComponent } from './home/latest-blog/latest-blog.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    ShopGridDefaultComponent,
    ShopListComponent,
    NotFoundComponent,
    HomeComponent,
    FeaturedProductsComponent,
    LatestProductsComponent,
    WhatWeOfferComponent,
    UniqueFeaturesComponent,
    TrendingProductsComponent,
    DiscountItemComponent,
    TopCategoriesComponent,
    SubscribeUsComponent,
    LatestBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule, 
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  
}
