import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';


const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},



  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
