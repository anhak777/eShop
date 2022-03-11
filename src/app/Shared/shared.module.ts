import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptionHeaderComponent } from './caption-header/caption-header.component';



@NgModule({
  declarations: [CaptionHeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[CaptionHeaderComponent]
})
export class SharedModule { }
