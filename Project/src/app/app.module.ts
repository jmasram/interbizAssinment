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
import { NavborComponent } from './home-page/navbar/navbor.component';
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
import { CardApp} from './home-page/Reminder/remind';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { Dialog1Component } from './home-page/Reminder/dialog1/dialog1.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule}  from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';



const material=[ MatAutocompleteModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
 MatDialogModule,
 MatInputModule,
 MatButtonModule,
 MatDividerModule,
 MatExpansionModule,
 MatGridListModule,
 MatSelectModule,
 MatPaginatorModule,
 MatProgressBarModule,
 MatProgressSpinnerModule,
 MatRadioModule,
 MatSidenavModule,
 MatSlideToggleModule,
 MatSliderModule
]


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
    Dialog1Component,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routing1,
    HttpClientModule,
    BrowserAnimationsModule,
    material
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
