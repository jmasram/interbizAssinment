import { Routes ,RouterModule}  from '@angular/router'

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './home-page/employee-list/employee-list.component';
import { EmployeeRegisterComponent } from './home-page/employee-register/employee-register.component';
import { EmployeeUpdateComponent } from './home-page/employee-update/employee-update.component';



const route1:Routes =[
                      // {path:'',component:WebsiteComponent},

                      // {path:'emplist',component:EmployeeListComponent},
                      // {path:'empAdd', component:EmployeeRegisterComponent},
                      // { path:'empUpdate/:empId', component:EmployeeUpdateComponent},

                      ];

@NgModule(
 {   imports:[
      RouterModule.forChild(route1)],

 exports:[RouterModule],



})
export class routing1{}
