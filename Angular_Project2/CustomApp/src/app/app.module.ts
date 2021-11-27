import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component }  from './Child1App/app.component';
import {TopAppComponent}   from './TopApp/TSApp';
import { CustComponent }  from './Child1App/app.component';
import { Highlighlight }   from './highlight.directive';
import {ChildDirective }  from './Child1App/drective'


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    TopAppComponent,
    CustComponent,
    Highlighlight,
    ChildDirective
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
