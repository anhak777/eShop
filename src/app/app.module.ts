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



@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    ShopGridDefaultComponent,
    ShopListComponent,
    NotFoundComponent,
    HomeComponent,
    FeaturedProductsComponent,
    LatestProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  
}
