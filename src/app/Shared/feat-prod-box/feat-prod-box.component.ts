import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feat-prod-box',
  templateUrl: './feat-prod-box.component.html',
  styleUrls: ['./feat-prod-box.component.css']
})
export class FeatProdBoxComponent implements OnInit {

  prodInfo: any[] = [
    {id: 0, name: "Cantilever chair", code: "Y523201", price: "$42.00", src:'../../../assets/img/feat-prod-01.png'},
    {id: 1, name: "Cantilever chair", code: "Y523201", price: "$42.00", src:'../../../assets/img/feat-prod-02.png'},
    {id: 2, name: "Cantilever chair", code: "Y523201", price: "$42.00", src:'../../../assets/img/feat-prod-03.png'},
    {id: 3, name: "Cantilever chair", code: "Y523201", price: "$42.00", src:'../../../assets/img/feat-prod-04.png'}
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
