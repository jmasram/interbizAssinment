import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAppComponent } from './child-app/child-app.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildAppComponent
  ],
  imports: [
    NgModule,
    BrowserModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
