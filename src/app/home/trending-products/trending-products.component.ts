import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent implements OnInit {

  public trendInfo: any[] = [
    {id: 0, name: "Cantilever chair", newPrice: "$26.00 ", oldPrice: "$42.00", src:'../../../assets/img/trend-prod-01.png'},
    {id: 1, name: "Cantilever chair", newPrice: "$26.00 ", oldPrice: "$42.00", src:'../../../assets/img/trend-prod-02.png'},
    {id: 2, name: "Cantilever chair", newPrice: "$26.00 ", oldPrice: "$42.00", src:'../../../assets/img/trend-prod-03.png'},
    {id: 3, name: "Cantilever chair", newPrice: "$26.00 ", oldPrice: "$42.00", src:'../../../assets/img/trend-prod-04.png'}
  ]  

  constructor() { }

  ngOnInit(): void {
  }

}
