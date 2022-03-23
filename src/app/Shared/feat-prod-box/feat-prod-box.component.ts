import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feat-prod-box',
  templateUrl: './feat-prod-box.component.html',
  styleUrls: ['./feat-prod-box.component.css']
})
export class FeatProdBoxComponent implements OnInit {

  @Input() prodInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
