import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productInfo: {id: number, name:string, price:string, oldPrice:string, src:string};

  constructor() { }

  ngOnInit(): void {
  }

}
