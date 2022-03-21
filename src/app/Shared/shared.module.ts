import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptionHeaderComponent } from './caption-header/caption-header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [CaptionHeaderComponent, FooterComponent],
  imports: [
    CommonModule,    
  ],
  exports:[CaptionHeaderComponent,FooterComponent]
})
export class SharedModule { }
