import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShopGridDefaultComponent } from './shop-grid-default/shop-grid-default.component';
import { ShopListComponent } from './shop-list/shop-list.component';


const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'pages', component: ShopGridDefaultComponent},
  { path: 'products', component: ShopListComponent},



  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
