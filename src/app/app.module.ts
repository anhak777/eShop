import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ShopGridDefaultComponent } from './shop-grid-default/shop-grid-default.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';



const appRoutes: Routes =[
  { path: '', component: MainSliderComponent},
  { path: 'pages', component: ShopGridDefaultComponent},
  { path: 'products', component: ShopListComponent},



  { path: '**', component: NotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainSliderComponent,
    ShopGridDefaultComponent,
    ShopListComponent,
    NotFoundComponent,
    UpperNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
