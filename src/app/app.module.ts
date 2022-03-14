import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ShopGridDefaultComponent } from './shop-grid-default/shop-grid-default.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { SharedModule } from './Shared/shared.module';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes =[
  { path: '', component: MainSliderComponent},
  //{ path: 'home', component: HomeComponent},
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
    UpperNavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  
}
