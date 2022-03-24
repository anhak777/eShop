import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-leatest-products',
  templateUrl: './leatest-products.component.html',
  styleUrls: ['./leatest-products.component.css']
})
export class LeatestProductsComponent implements OnInit {

  productLinks: {id:number, name:string, path:string}[] = [
    {id:0, name:"New Arrival", path:"newarrival"},
    {id:1, name:"Best Seller", path:"bestseller"},
    {id:2, name:"Featured", path:"#"},
    {id:3, name:"Special Offer", path:"#"}
  ]

  constructor() { }

  

  ngOnInit(): void {

  }

}
