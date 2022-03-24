import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-prod-box',
  templateUrl: './top-prod-box.component.html',
  styleUrls: ['./top-prod-box.component.css']
})
export class TopProdBoxComponent implements OnInit {

  @Input() topInfo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
