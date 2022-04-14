import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  // check = new FormControl(true);

  checkedBox = false;

  @Output() newItemEvent = new EventEmitter<boolean>();

  addNewItem(value: boolean){
    this.newItemEvent.emit(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
