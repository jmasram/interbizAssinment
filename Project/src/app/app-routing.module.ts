import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './home-page/employee-list/employee-list.component';
import { EmployeeRegisterComponent } from './home-page/employee-register/employee-register.component';
import { EmployeeUpdateComponent } from './home-page/employee-update/employee-update.component';

import { HomePageComponent } from './home-page/home-page.component';
import { Item1Component } from './home-page/item1/item1.component';
import { Item2Component } from './home-page/item2/item2.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  // { path:'' ,component:LoginPageComponent},
  {path:'item1', component:Item1Component},
  {path:'item2', component:Item2Component}
  // ,{path:'', component:HomePageComponent}
  ,{path:'emplist',component:EmployeeListComponent},
  {path:'empAdd', component:EmployeeRegisterComponent},
  { path:'empUpdate', component:EmployeeUpdateComponent}

  // {path:' ',children:[
  //            {path:'', component:HomePageComponent}
  //            , {path:'item1', component:Item1Component},
  //              {path:'item2', component:Item2Component}
  // ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
