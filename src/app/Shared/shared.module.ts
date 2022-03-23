import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CaptionHeaderComponent } from './caption-header/caption-header.component';
import { FooterComponent } from './footer/footer.component';
import { FeatProdBoxComponent } from './feat-prod-box/feat-prod-box.component';
import { LateProdBoxComponent } from './late-prod-box/late-prod-box.component';
import { ProductOptionsComponent } from './product-options/product-options.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { TrendProdBoxComponent } from './trend-prod-box/trend-prod-box.component';
import { ProdOnSaleBoxComponent } from './prod-on-sale-box/prod-on-sale-box.component';
import { ProdSmallBoxComponent } from './prod-small-box/prod-small-box.component';
import { TopProdBoxComponent } from './top-prod-box/top-prod-box.component';
import { LateBlogBoxComponent } from './late-blog-box/late-blog-box.component';



@NgModule({
  declarations: [UpperNavComponent, NavigationComponent, CaptionHeaderComponent, FooterComponent, FeatProdBoxComponent, LateProdBoxComponent, ProductOptionsComponent, FeatureBoxComponent, TrendProdBoxComponent, ProdOnSaleBoxComponent, ProdSmallBoxComponent, TopProdBoxComponent, LateBlogBoxComponent],
  imports: [
    CommonModule,    
  ],
  exports:[UpperNavComponent, NavigationComponent, CaptionHeaderComponent, FooterComponent, FeatProdBoxComponent, LateProdBoxComponent, ProductOptionsComponent, FeatureBoxComponent, TrendProdBoxComponent, ProdOnSaleBoxComponent, ProdSmallBoxComponent, TopProdBoxComponent, LateBlogBoxComponent]
})
export class SharedModule { }
