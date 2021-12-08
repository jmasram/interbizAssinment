import { Routes ,RouterModule}  from '@angular/router'
import { HomeComponent } from './home/home.component'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WebsiteComponent } from './website/website.component';


const route1:Routes[ {path:'path1',component:HomeComponent},
                       { path:'path2' component:WebsiteComponent}

];

@NgModule(
 {   imports:[
      RouterModule.forRoot(route1)
 ],
     exports:[routing1]

})
export  class routing1{}
