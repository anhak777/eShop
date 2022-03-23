import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {

  chairInfo: any[] = [
    {id: 0, name: "Comfort Handy Craft", oldPrice: "$65.00", newPrice: "$42.00", src:'../../../assets/img/late-prod-01.png'},
    {id: 1, name: "Comfort Handy Craft", oldPrice: "$65.00", newPrice: "$42.00", src:'../../../assets/img/late-prod-02.png'},
    {id: 2, name: "Comfort Handy Craft", oldPrice: "$65.00", newPrice: "$42.00", src:'../../../assets/img/late-prod-03.png'},
    {id: 2, name: "Comfort Handy Craft", oldPrice: "$65.00", newPrice: "$42.00", src:'../../../assets/img/late-prod-04.png'},
    {id: 2, name: "Comfort Handy Craft", oldPrice: "$65.00", newPrice: "$42.00", src:'../../../assets/img/late-prod-05.png'},
    {id: 3, name: "Comfort Handy Craft", oldPrice: "$65.00", newPrice: "$42.00", src:'../../../assets/img/late-prod-06.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
