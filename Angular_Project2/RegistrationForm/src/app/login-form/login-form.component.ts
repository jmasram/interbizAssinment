import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

 loginForm:FormGroup;

  loginUser(){
    // this.loginForm.setControl.name:'kkkk';
    console.log(this.loginForm.value)
  }


  constructor() {
    this.loginForm=new FormGroup({
      name:new FormControl('',[Validators.required]),//we can use default value
      mname:new FormControl(''),
      lname:new FormControl(''),
      email:new FormControl(''),
      mobno:new FormControl(''),
      password:new FormControl('ibz123')
    })
  }

  get name() {return this.loginForm.get('name');}

  ngOnInit(): void {
  console.log(this.name);
  }





}
