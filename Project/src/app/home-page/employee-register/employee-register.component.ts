import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  empForm:FormGroup;
  constructor() {
    this.empForm=new FormGroup({
     eId : new FormControl('',[Validators.required]),
     ename:new FormControl('',[Validators.required]),
     esal:new FormControl('',[Validators.required]),
     emob:new FormControl('',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
     email:new FormControl('',[Validators.required,Validators.pattern('/^[7-9]{2}-[0-9]{4}-[0-9]{4}$/')]),
     eaddr:new FormControl('')
   });

   }

  ngOnInit(): void {
  }

}
