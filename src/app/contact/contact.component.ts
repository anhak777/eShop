import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;
  flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required && Validators.minLength(20)),
      university: new FormControl('')
    })
  }

  onSubmit(form: FormGroup) {
    const formData = {...form.value};
    console.log('Form Data:' , formData);
    console.log('Valid?', form.valid);
    console.log('Name:', form.value.name);
    console.log('Email:', form.value.email);
    console.log('Subject:', form.value.subject);
    console.log('Message:', form.value.message);
    form.reset();
  }

  

  studentControl(): any {
    this.flag = !this.flag 
    this.flag ? this.myForm.controls['university'].setValidators([Validators.required]) 
    :  this.myForm.controls['university'].removeValidators([Validators.required])
   
  }

}
