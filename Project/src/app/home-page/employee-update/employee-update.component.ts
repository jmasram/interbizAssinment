import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empObj } from 'src/app/Interfaces/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  empObj:empObj;

  constructor( private routes:ActivatedRoute, private router:Router){
    debugger;
    this.empObj=new empObj();           //initilization
    this.routes.params.subscribe((res)=>{this.empObj.empId=res['empId']});
  }


   getNewId(){
     debugger;
    const oldData=localStorage.getItem('empList');
    if(oldData!==null){
      const empList=JSON.parse(oldData);
      return empList.length+1;

    }
    else{
      return 1;
    }
  }


  ngOnInit(): void {

    debugger;
    const oldData=localStorage.getItem('empList');
    if(oldData!==null)
    {
      const empList=JSON.parse(oldData);
      const currentData=empList.find((m:any) => m.empId ==this.empObj.empId);
      if(currentData!==undefined){
        this.empObj.ename=currentData.ename;
        this.empObj.esal=currentData.esal;
        this.empObj.emob=currentData.emob;
        this.empObj.email=currentData.email;
        this.empObj.eaddr=currentData.eaddr;

      }

    }

  }

  updateEmp(){
    debugger;
        const letestData=this.getNewId();
        this.empObj.empId=letestData;
        const oldData=localStorage.getItem('empList');
        if(oldData!==null)
        {
          const empList=JSON.parse(oldData)
          empList.splice(empList.findIndex((a:any)=>a.empId== this.empObj.empId),1);
          empList.push(this.empObj);
          localStorage.setItem('empList',JSON.stringify(empList));
        }
        alert('Updated SuccessFully!')
        this.router.navigateByUrl('/emplist');
  }
}
