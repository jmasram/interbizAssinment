import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { empObj } from 'src/app/Interfaces/employee';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {

empObj:empObj=new empObj();
id:any;
iId:any;


empForm:FormGroup;
constructor() {
  this.empForm=new FormGroup({
   empId : new FormControl(this.empObj.empId,[Validators.required]),
   ename:new FormControl(this.empObj.ename,[Validators.required]),
   esal:new FormControl(this.empObj.esal,[Validators.required]),
   emob:new FormControl(this.empObj.emob,[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
   email:new FormControl(this.empObj.email,[Validators.required,Validators.pattern('[0-9]{10}')]),
   addr:new FormControl(this.empObj.eaddr)
 });
   this.addEmp();
 }


  ngOnInit(): void {

    localStorage.setItem("Employee",JSON.stringify(this.empForm.value));
  }


  addEmp(){
    //  this.id=JSON.parse(localStorage.getItem('product'));
    this.id =localStorage.getItem('Employee');
       this.iId= JSON.parse(this.id);

    console.log(this.iId);
    }
  }



