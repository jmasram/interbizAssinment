import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TakeActionComponent } from './take-action/take-action.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<TakeActionComponent> {
  canDeactivate(component: TakeActionComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  CanDeactivate(route:TakeActionComponent){

    return true;
  }

}
