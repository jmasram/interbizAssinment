import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


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
