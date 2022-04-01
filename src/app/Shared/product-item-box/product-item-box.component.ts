import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-box',
  templateUrl: './product-item-box.component.html',
  styleUrls: ['./product-item-box.component.css']
})
export class ProductItemBoxComponent implements OnInit {

  @Input() prodItems;
  @Input() viewProductsNumber: number
  @Input() sortByOption;
  
  constructor() { }

  ngOnInit(): void {
  }

}
