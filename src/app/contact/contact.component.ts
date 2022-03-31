import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUs = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  })

  get name(){
    return this.contactUs.get('name')
  }

  get email(){
    return this.contactUs.get('email')
  }

  get message(){
    return this.contactUs.get('message')
  }

  onSubmit(){
    console.log(this.contactUs.value) 
  }


  constructor() { }

  ngOnInit(): void {
  }
  

}
