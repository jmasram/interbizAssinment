import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthsGuard implements CanActivate {
 constructor(private authss:AuthenticationService, private routes:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if (this.authss.isAuthenticated){
        return true;
      }
      this.routes.navigate(['']);
      return false;

    }

}
