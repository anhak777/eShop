import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MainSliderComponent } from './home/main-slider/main-slider.component';
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
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BlogFeedBoxComponent } from './Shared/blog-feed-box/blog-feed-box.component';





@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
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
    LatestBlogComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    FaqComponent,
    AboutComponent,
    BlogComponent,
    ShoppingCartComponent,
    LoginFormComponent,
    ProductDetailsComponent,
    BlogFeedBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule, 
    RouterModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})


export class AppModule {
  
}
