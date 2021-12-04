import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { LoginComponent } from './login/login.component';
import { DonateComponent } from './donate/donate.component';
import { TakeActionComponent } from './take-action/take-action.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { component: WebsiteComponent, path: '' },
  { component: LoginComponent, path: 'login' },
  { component: DonateComponent, path: 'donate' },
  { component: TakeActionComponent, path: 'takeaction' },

//  { path: '**', component:PageNotFoundComponent},
  { path:'' , redirectTo:'donate',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
