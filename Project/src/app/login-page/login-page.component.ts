import { Component, OnInit } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    console.log(value);
  }
}
