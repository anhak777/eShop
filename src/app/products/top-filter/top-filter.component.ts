import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-top-filter',
  templateUrl: './top-filter.component.html',
  styleUrls: ['./top-filter.component.css']
})
export class TopFilterComponent implements OnInit {

  perPage = new FormControl('');
  
  search = new FormControl('');

  
  perPageInfo(): number {
    return this.perPage.value;
  }
  
  pageValue = this.perPageInfo();

  
  

  sortSelects = [
    {id: 1, option: "Best Match"},
    {id: 2, option: "Worst Match"},
    {id: 3, option: "Highest"},
    {id: 3, option: "Lowest"}
  ];
  
  form = new FormGroup({
    selecta: new FormControl(this.sortSelects)
  })

  constructor() { }
  


  ngOnInit(): void {
    console.log(this.pageValue)
    
  }

}

// https://angular.io/api/forms/SelectControlValueAccessor