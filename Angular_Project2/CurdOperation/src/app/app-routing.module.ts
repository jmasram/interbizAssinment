import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageCompnet}

const routes: Routes = [

  {path:'home',component:HomePageComponent},
  {path:'emplist',component:EmployeeListComponent},
  {path:'empAdd', component:EmployeeRegisterComponent},
  { path:'empUpdate/:empId', component:EmployeeUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
