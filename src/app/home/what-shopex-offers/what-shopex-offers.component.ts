import { Component, OnInit } from '@angular/core';

interface cardItems {
  src: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-what-shopex-offers',
  templateUrl: './what-shopex-offers.component.html',
  styleUrls: ['./what-shopex-offers.component.css']
})
export class WhatShopexOffersComponent implements OnInit {

  cardInfo: cardItems [] = [
    {src: '../../../assets/img/shopex/free-delivery 1.svg', title:'free shipping', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'},
    {src: '../../../assets/img/shopex/cashback 1.svg', title:'cashback', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'},
    {src: '../../../assets/img/shopex/premium-quality 1.svg', title:'premium quality', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'},
    {src: '../../../assets/img/shopex/24-hours-support 1.svg', title:'24 hours support', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
