import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item-box-list',
  templateUrl: './product-item-box-list.component.html',
  styleUrls: ['./product-item-box-list.component.css']
})
export class ProductItemBoxListComponent implements OnInit {

  @Input() prodItems;
  @Input() viewProductsNumber: number
  @Input() sortByOption;

  constructor() { }

  ngOnInit(): void {
    console.log(this.viewProductsNumber);
  }

}
