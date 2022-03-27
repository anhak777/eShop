import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent implements OnInit {

  @Input() iconInfo 

  constructor() { }

  ngOnInit(): void {
  }

}
