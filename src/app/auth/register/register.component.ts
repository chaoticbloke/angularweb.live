import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:FormGroup= new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    interest:new FormControl(''),
    gender:new FormControl(''),
    subscribe:new FormControl(''),

  })
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    console.log(this.register.value)
  }

}
