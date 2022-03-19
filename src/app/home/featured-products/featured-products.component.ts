import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  
  productCards: {id: number, name: string, code: string, price: string, src:string}[] = [
    {id: 0, name: "Cantilever chair", code: "Y523201", price: "$42.00", src:'https://picsum.photos/178'},
    {id: 1, name: "Butterfly chair", code: "Y132846", price: "$59.00", src:'https://picsum.photos/178'},
    {id: 2, name: "Classic Blue chair", code: "Y432879", price: "$23.00", src:'https://picsum.photos/178'},
    {id: 3, name: "Assy chair", code: "Y493579", price: "$41.00", src:'https://picsum.photos/178'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
