import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";

  onSubmit(form: NgForm) {
    console.log(form)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
