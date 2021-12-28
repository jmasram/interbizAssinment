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
import { StudentsComponent } from './home-page/students/students.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularMaterialExample } from './home-page/AngularMaterial/angularmaterial';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { CardApp, DialogOverviewExampleDialog } from './home-page/Reminder/remind';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


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
    NavborComponent,
    StudentsComponent,
    AngularMaterialExample,
    CardApp,
    DialogOverviewExampleDialog


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routing1,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
   MatDialogModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
