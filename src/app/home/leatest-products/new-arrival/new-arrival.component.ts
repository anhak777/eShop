import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {
  
  productCards: {id: number, name:string, price:string, oldPrice:string, src:string} [] = [
    {id: 0, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 1, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 2, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 3, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 4, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 5, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
