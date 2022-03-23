import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.css']
})
export class FeatureBoxComponent implements OnInit {

  featureInfo: any[] = [
    {id: 0, name: "Free Delivery", src:'../../../assets/graphics/FreeDelivery.svg', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."},
    {id: 1, name: "100% Cash Back", src:'../../../assets/graphics/CashBack.svg', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."},
    {id: 2, name: "Quality Product", src:'../../../assets/graphics/QualityProduct.svg', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."},
    {id: 2, name: "24/7 Support", src:'../../../assets/graphics/Support.svg', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
