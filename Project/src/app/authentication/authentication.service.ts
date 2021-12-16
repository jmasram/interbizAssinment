import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../model/loginDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  isAuthenticated=true;
  private readonly user=new LoginData('test@gmail.com','ibc@123');
  checkCredentials: any;

  constructor(private router:Router) { }
  authenticate(loginData:LoginData):boolean{
    if(this.checkCredential(loginData)){
      this.isAuthenticated=true;
      this.router.navigate(['home'])
      return true;
    }
    this.isAuthenticated=false;
    return false;

  }

  private checkCredential(loginData:LoginData):boolean{
    return this.checkEmail(loginData.getEmail()) && this.checkpwd(loginData.getPwd());
  }

  private checkEmail(email:string):boolean{
    return email===this.user.getEmail();
  }

private checkpwd(pwd:String):boolean{
  return pwd === this.user.getPwd();
}
}
