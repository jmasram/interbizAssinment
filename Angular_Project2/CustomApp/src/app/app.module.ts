import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component }  from './Child1App/app.component';
import {TopAppComponent}   from './TopApp/TSApp';
import { CustComponent }  from './Child1App/app.component';
import { Highlighlight }   from './highlight.directive';
import {ChildDirective }  from './Child1App/drective';
import { FormsModule } from '@angular/forms';
import{  CustomPipe } from '../app/app.pipe'


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    TopAppComponent,
    CustComponent,
    Highlighlight,
    ChildDirective,
    CustomPipe
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
