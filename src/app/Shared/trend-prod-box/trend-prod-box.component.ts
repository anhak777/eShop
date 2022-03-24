import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trend-prod-box',
  templateUrl: './trend-prod-box.component.html',
  styleUrls: ['./trend-prod-box.component.css']
})
export class TrendProdBoxComponent implements OnInit {

  @Input() trendInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
