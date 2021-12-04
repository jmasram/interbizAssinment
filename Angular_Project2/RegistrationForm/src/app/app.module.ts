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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
