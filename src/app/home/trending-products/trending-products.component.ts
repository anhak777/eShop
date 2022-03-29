import { Component, OnInit } from '@angular/core';

interface objType {
  id: number
  src: string
  name: string
  price: string
  oldPrice: string
}

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent implements OnInit {

  constructor() { }

  items:objType [] = [
    {id: 1, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 2, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 3, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 4, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 5, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 6, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"}
  ]

  ngOnInit(): void {
  }

}
