import { Component, OnInit } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';
import { LoginData } from '../model/loginDetails';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(loginform:NgForm){
    debugger;
    console.log(loginform.value);

    const loginData=new LoginData(loginform.value.email,loginform.value.pwd);
    this.auth.authenticate(loginData) ;
  }
}
