import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Item1Component } from './home-page/item1/item1.component';
import { Item2Component } from './home-page/item2/item2.component';
import { EmployeeListComponent } from './home-page/employee-list/employee-list.component';
import { EmployeeRegisterComponent } from './home-page/employee-register/employee-register.component';
import { EmployeeUpdateComponent } from './home-page/employee-update/employee-update.component';
import { NavborComponent } from './home-page/navbor/navbor.component';
import { routing1 } from './routing1';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    Item1Component,
    Item2Component,
    EmployeeListComponent,
    EmployeeRegisterComponent,
    EmployeeUpdateComponent,
    NavborComponent
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
