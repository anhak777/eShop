import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-late-blog-box',
  templateUrl: './late-blog-box.component.html',
  styleUrls: ['./late-blog-box.component.css']
})
export class LateBlogBoxComponent implements OnInit {

  @Input() blogInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
