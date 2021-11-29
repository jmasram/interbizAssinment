import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomApp';

  birthday="16121995";

  name1:string="interbiz counsulting raipur";

  name2:string="THIS IS LOWER CASE USING PIPE -BUILD IN";

  fname:String='';

  setValues(){
    this.fname="Two way Data Binding";
  }

  onSubmit(f:NgForm)
  {
    console.log(f.value);
    console.log(f.valid);
  }

  n:number=3;

}
