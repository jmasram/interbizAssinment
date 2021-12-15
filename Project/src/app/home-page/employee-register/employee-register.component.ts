
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { empObj } from 'src/app/Interfaces/employee';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  empObj:empObj;

  constructor(){
    this.empObj=new empObj();           //initilization
  }

  msg:any="";
  massage:string[]=[];
  isChacked:boolean=false;

  ngOnInit(): void {
  }

   getNewId(){
    //  debugger;
    const oldData=localStorage.getItem('empList');
    if(oldData!==null){
      const empList=JSON.parse(oldData);
      return empList.length+1;

    }
    else{
      return 1;
    }
  }
  addEmp(){
    // debugger;
        const letestData=this.getNewId();
        this.empObj.empId=letestData;
        const oldData=localStorage.getItem('empList');
        if(oldData!==null)
        {
          const empList=JSON.parse(oldData)
          empList.push(this.empObj);
          localStorage.setItem('empList',JSON.stringify(empList));
        }
        else{
          const empArr=[];
          empArr.push(this.empObj);
          localStorage.setItem('empList',JSON.stringify(empArr));
        }
  }


    onClick(event:any){
      const empList:any=[];
       this.empObj.hobby=empList.filter((x:any)=>x.isselected==true).map((x:any)=>x.name)

  }


}
