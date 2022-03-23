import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-late-prod-box',
  templateUrl: './late-prod-box.component.html',
  styleUrls: ['./late-prod-box.component.css']
})
export class LateProdBoxComponent implements OnInit { 

  @Input() chairInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
