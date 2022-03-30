import { Component, OnInit } from '@angular/core';

// export interface FooterColumns{
//   head: string;
//   items: string[]
// }

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // footerItems: FooterColumns [] = [
  //   {head:"Categories", 
  //   items:[
  //     "Laptops & Computers", 
  //     "Cameras & Photography", 
  //     "Smart Phones & Tablets", 
  //     "Video Games & Consoles",
  //     "Waterproof Headphones"
  //   ]},
  //   {head:"Customer Care",
  //   items:[
  //     "My Account",
  //     "Discount",
  //     "Returns",
  //     "Orders History",
  //     "Order Tracking"
  //   ]}
  // ]

  constructor() { }

  ngOnInit(): void {
  }

}
