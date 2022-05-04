import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-feed-box',
  templateUrl: './blog-feed-box.component.html',
  styleUrls: ['./blog-feed-box.component.css']
})
export class BlogFeedBoxComponent implements OnInit {

  @Input() blogPreview;

  constructor() { }

  ngOnInit(): void {
  }

}
