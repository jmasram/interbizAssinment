import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  loginForm=new FormGroup({
    name:new FormControl(''),//we can use default value
    password:new FormControl('ibz123')
  })
  loginUser(){
    // this.loginForm.setControl.name:'kkkk';
    console.log(this.loginForm.value)
  }


  updateName() {

  }


  constructor() { }

  ngOnInit(): void {
  }



}
