import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent implements OnInit {

  public topInfo: any[] = [
    {id: 0, name: 'Mini LCW Chair', price: '$56.00', src: '../../../assets/img/top-category-01.png'},
    {id: 1, name: 'Mini LCW Chair', price: '$56.00', src: '../../../assets/img/top-category-02.png'},
    {id: 2, name: 'Mini LCW Chair', price: '$56.00', src: '../../../assets/img/top-category-03.png'},
    {id: 3, name: 'Mini LCW Chair', price: '$56.00', src: '../../../assets/img/top-category-01.png'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
