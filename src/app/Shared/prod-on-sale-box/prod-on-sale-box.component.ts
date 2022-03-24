import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod-on-sale-box',
  templateUrl: './prod-on-sale-box.component.html',
  styleUrls: ['./prod-on-sale-box.component.css']
})
export class ProdOnSaleBoxComponent implements OnInit {

  @Input() saleInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
