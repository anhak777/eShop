import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caption-header',
  templateUrl: './caption-header.component.html',
  styleUrls: ['./caption-header.component.css']
})
export class CaptionHeaderComponent implements OnInit {
  
  @Input() title: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
