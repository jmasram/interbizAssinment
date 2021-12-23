import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { LoginComponent } from './login/login.component';
import { DonateComponent } from './donate/donate.component';
import { TakeActionComponent } from './take-action/take-action.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Tiger1Component } from './donate/tiger1/tiger1.component';
import { Tiger2Component } from './donate/tiger2/tiger2.component';
import { Tiger3Component } from './donate/tiger3/tiger3.component';
import { Tiger4Component } from './donate/tiger4/tiger4.component';
import { HomeComponent } from './home/home.component';
import { UnsavedGuard } from './unsaved.guard';
import { ProductComponent } from './Tables/Product/product';
import { ManuComponent } from './Manu/manu';
import { FoodComponentApp } from './Tables/Food/food';
import { CheckboxAssignComponent } from './checkbox-assign/checkbox-assign.component';
import { ResolveGuard } from './resolve.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  {component:WebsiteComponent,path:'web'},
  { component: LoginComponent, path: 'login'},
  { component: TakeActionComponent, path: 'takeaction' ,canActivate:[ResolveGuard]},
  {  path: 'donate',  children:[{path:'', component: DonateComponent},
                               {path:'tiger1' ,component:Tiger1Component},
                               { path:'tiger2',component:Tiger2Component},
                               { path:'tiger3', component:Tiger3Component},
                               {path:'tiger4', component:Tiger4Component}

    ] },

    {path:'manu', children:[{path:'',component:ManuComponent},
                     {path:"table", component:ProductComponent},
                     {path:"food" , component:FoodComponentApp},
                     {path:"checkbox",component:CheckboxAssignComponent}

  ]},

  {path:'',component: LoginPageComponent},
  {path:'emplist',component:EmployeeListComponent},
  {path:'empAdd', component:EmployeeRegisterComponent},
  { path:'empUpdate/:empId', component:EmployeeUpdateComponent},


  // { path:'' , redirectTo:'',pathMatch:"full"},
    // { path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
