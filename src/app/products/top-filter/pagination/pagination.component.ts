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

  @Input() pageSearch;

  p: number = 1;
  
  collection:objType [] = [
    {id: 1, name:"Comfort Handy Craft Tupac", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 2, name:"Comfort Handy Tupic", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
    {id: 3, name:"Hello", price:"$42", oldPrice: "$65", src:"https://picsum.photos/id/1/223"},
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

  
  
  collectionFilter = [];
  
  
  constructor() {
    this.collection.forEach( element => console.log(element.name.toUpperCase()))
    
    
  }
  
  ngOnInit(): void {
    
    

    this.collectionFilter = this.collection;

    this.pageSearch.subscribe(data => {
      
      if (data){
        this.collectionFilter = this.collection.filter((nameFilter) => {
          return nameFilter.name.toUpperCase().includes(data.toUpperCase());
        });
      } else{
        this.collectionFilter = this.collection
      }
    })


    
  }
  
  // for (let i = 0; i <= this.collection.length; i++){
  //   if(this.collection[i].name === this.pageSearch){
  //     this.collectionFilter.push(i);  
  //   }
    
  // }

  // pipe(o:Observable<any>){
  //   o.subscribe(_=>{
  //     return _
  //   })
  // }
}
