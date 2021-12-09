import { Routes ,RouterModule}  from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';


const route1:Routes =[
                      // {path:'',component:WebsiteComponent},
                       { path: 'path1', component:RegistrationFormComponent},
                       { path:'path2', component:LoginComponent}


                      ];

@NgModule(
 {   imports:[
      RouterModule.forChild(route1)],

 exports:[RouterModule],



})
export class routing1{}
