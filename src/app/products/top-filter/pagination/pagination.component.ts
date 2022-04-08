import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

interface objType {
  id: number
  src: string
  name: string
  price: string
  oldPrice: string
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pageNumber;

  p: number = 1;
  
  collection:objType [] = [
    {id: 1, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 2, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 3, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 4, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 5, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 6, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 7, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 8, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 9, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 10, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 11, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 12, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 13, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 14, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 15, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 16, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 17, name:"Comfort Handy Craft", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"}
  ]  
  
  constructor() { }

  ngOnInit(): void {
  }


  pipe(o:Observable<any>){
    o.subscribe(_=>{
      return _
    })
  }
}
