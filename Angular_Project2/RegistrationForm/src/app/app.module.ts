import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WebsiteComponent } from './website/website.component';
import { LoginComponent } from './login/login.component';
import { DonateComponent } from './donate/donate.component';
import { TakeActionComponent } from './take-action/take-action.component';
import { CheckboxAssignComponent } from './checkbox-assign/checkbox-assign.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Tiger1Component } from './donate/tiger1/tiger1.component';
import { Tiger2Component } from './donate/tiger2/tiger2.component';
import { Tiger3Component } from './donate/tiger3/tiger3.component';
import { Tiger4Component } from './donate/tiger4/tiger4.component';
import { HomeComponent } from './home/home.component';
import { routing1 } from './routing1';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    WebsiteComponent,
    LoginComponent,
    DonateComponent,
    TakeActionComponent,
    CheckboxAssignComponent,
    PageNotFoundComponent,
    Tiger1Component,
    Tiger2Component,
    Tiger3Component,
    Tiger4Component,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routing1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
