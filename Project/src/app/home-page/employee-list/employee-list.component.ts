import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empObj } from 'src/app/Interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  checked:boolean=true;
  empList:empObj[];
  constructor(private router:Router) {
    this.empList=[];
  }

  ngOnInit(): void {
  // debugger;
    const data=localStorage.getItem('empList');
    if (data!==null) {
      this.empList=JSON.parse(data); //Fatch Data

    }
  }

  delete(empId:any){
    // debugger;

    const oldData=localStorage.getItem('empList');
    if(oldData!==null)
    {
      const empList=JSON.parse(oldData)
      empList.splice(empList.findIndex((a:any)=>a.empId== empId),1);
      localStorage.setItem('empList',JSON.stringify(empList));
    }
    alert('Delete Successfully!')
    this.router.navigateByUrl('/home');

  }

}
