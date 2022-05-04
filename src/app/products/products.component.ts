import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public isListView = false;

  public prodBrand: string[] = [
    "Coaster Furniture",
    "Fusion Dot High Fashion",
    "Unique Furnitture Restor",
    "Dream Furnitture Flipping",
    "Young Repurposed",
    "Green DIY furniture"
  ]

  public discount: string[] = [
    "20% Cashback",
    "5% Cashback Offer",
    "25% Discount Offer"
  ]

  public categories: string[] = [
    "Prestashop",
    "Magento",
    "Bigcommerce",
    "osCommerce",
    "3dcart",
    "Bags",
    "Accessories",
    "Jewellery",
    "Watches"
  ]

  public price: string[] = [
    "$0.00 - $150.00",
    "$150.00 - $350.00",
    "$150.00 - $504.00",
    "$450.00 +"
  ]

  public viewProductsNumber = 12;
  public sortByOption: any;

  public prodItems: any[] = [
    {id: 0, name: "Vel elit euismod", newPrice: "50.00" , oldPrice: "60.00", src:'../../../assets/img/Product-01.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 1, name: "Ultricies condimentum imperdiet", newPrice: "55.00" , oldPrice: "42.00", src:'../../../assets/img/Product-02.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 2, name: "Vitae suspendisse sed", newPrice: "45.00" , oldPrice: "42.00", src:'../../../assets/img/Product-03.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 3, name: "Sed at fermentum", newPrice: "32.00" , oldPrice: "42.00", src:'../../../assets/img/Product-04.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 4, name: "Fusce pellentesque at", newPrice: "77.00" , oldPrice: "42.00", src:'../../../assets/img/Product-05.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 5, name: "Vestibulum magna laoreet", newPrice: "43.00" , oldPrice: "42.00", src:'../../../assets/img/Product-06.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 6, name: "Sollicitudin amet orci", newPrice: "15.00" , oldPrice: "42.00", src:'../../../assets/img/Product-07.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 7, name: "Ultrices mauris sit", newPrice: "52.00" , oldPrice: "42.00", src:'../../../assets/img/Product-08.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 8, name: "Pellentesque condimentum ac", newPrice: "20.00" , oldPrice: "42.00", src:'../../../assets/img/Product-09.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 9, name: "Cras scelerisque velit", newPrice: "70.00" , oldPrice: "42.00", src:'../../../assets/img/Product-10.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 10, name: "Lectus vulputate faucibus", newPrice: "20.00" , oldPrice: "42.00", src:'../../../assets/img/Product-11.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'},
    {id: 11, name: "Purus risus, ut", newPrice: "42.00" , oldPrice: "42.00", src:'../../../assets/img/Product-01.png', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'}    
  ]

  constructor() { }

  public sort() {
    console.log(this.sortByOption);
    // get viewProductsNumber
    // get sortBy.value
    // activate sortPipe
  }

  ngOnInit(): void {
    
  } 

}
