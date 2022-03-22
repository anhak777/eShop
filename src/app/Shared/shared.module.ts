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



@NgModule({
  declarations: [UpperNavComponent, NavigationComponent, CaptionHeaderComponent, FooterComponent, FeatProdBoxComponent, LateProdBoxComponent, ProductOptionsComponent, FeatureBoxComponent],
  imports: [
    CommonModule,    
  ],
  exports:[UpperNavComponent, NavigationComponent, CaptionHeaderComponent, FooterComponent, FeatProdBoxComponent, LateProdBoxComponent, ProductOptionsComponent]
})
export class SharedModule { }
