import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAppComponent } from './child-app/child-app.component';
import { FormsModule, ReactiveFormsModule ,MatCheckBox} from '@angular/forms';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildAppComponent
  ],
  imports: [
    NgModule,
    BrowserModule,
    AppRoutingModule,
    FormGroup,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
