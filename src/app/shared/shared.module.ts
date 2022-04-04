import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../home/leatest-products/product-card/product-card.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  
  imports: [
    CommonModule
  ],
  declarations: [
    ProductCardComponent,
    CardComponent
  ],
  exports: [
    ProductCardComponent,
    CardComponent
  ]
})
export class SharedModule { }
