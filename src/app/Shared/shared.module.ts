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
import { TopProdBoxComponent } from './top-prod-box/top-prod-box.component';
import { LateBlogBoxComponent } from './late-blog-box/late-blog-box.component';
import { RouterModule } from '@angular/router';
import { ProductItemBoxComponent } from './product-item-box/product-item-box.component';
import { ProductItemBoxListComponent } from './product-item-box-list/product-item-box-list.component';
import { SortPipe } from './sort.pipe';
import { PostPreviewBoxComponent } from './post-preview-box/post-preview-box.component';
import { BlogPageBarComponent } from './blog-page-bar/blog-page-bar.component';



@NgModule({
  declarations: [UpperNavComponent, SortPipe, NavigationComponent, CaptionHeaderComponent, FooterComponent, FeatProdBoxComponent, LateProdBoxComponent, ProductOptionsComponent, FeatureBoxComponent, TrendProdBoxComponent, TopProdBoxComponent, LateBlogBoxComponent, ProductItemBoxComponent, ProductItemBoxListComponent, BlogPageBarComponent, PostPreviewBoxComponent, BlogPageBarComponent],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports:[UpperNavComponent, SortPipe, NavigationComponent, CaptionHeaderComponent, FooterComponent, FeatProdBoxComponent, LateProdBoxComponent, ProductOptionsComponent, FeatureBoxComponent, TrendProdBoxComponent, TopProdBoxComponent, LateBlogBoxComponent, ProductItemBoxComponent, ProductItemBoxListComponent, BlogPageBarComponent, PostPreviewBoxComponent, BlogPageBarComponent]
})
export class SharedModule { }
