import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TopFilterService } from './top-filter.service';

@Component({
  selector: 'app-top-filter',
  templateUrl: './top-filter.component.html',
  styleUrls: ['./top-filter.component.css']
})
export class TopFilterComponent implements OnInit {

  perPage = new FormControl('');
  
  search = new FormControl('');

  checkBoxState = null;

  addedCheck(newItem:boolean){
    this.checkBoxState = newItem;
    
    console.log(this.checkBoxState)
  }


  sortSelects = [
    {id: 1, option: "Best Match"},
    {id: 2, option: "Worst Match"},
    {id: 3, option: "Highest"},
    {id: 3, option: "Lowest"}
  ];
  
  form = new FormGroup({
    selecta: new FormControl(this.sortSelects)
  })

  constructor(private _topFilterService:TopFilterService) { }

  onKeyUp(e){
    this._topFilterService.sendSearch(e.target.value)
  }

  ngOnInit(): void {
    
  }

}


// https://angular.io/api/forms/SelectControlValueAccessor