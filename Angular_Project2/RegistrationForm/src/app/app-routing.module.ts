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
const routes: Routes = [
  // { component: WebsiteComponent, path: '' },
  { component: LoginComponent, path: 'login' },
  {  path: 'donate', children:[{path:'', component: DonateComponent,},
                               {path:'tiger1' ,component:Tiger1Component},
                               { path:'tiger2',component:Tiger2Component},
                               { path:'tiger3', component:Tiger3Component},
                               {path:'tiger4', component:Tiger4Component}

    ] },
  { component: TakeActionComponent, path: 'takeaction' },



  // { path:'' , redirectTo:'donate',pathMatch:"full"},
    { path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
