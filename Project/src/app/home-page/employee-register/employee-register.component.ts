
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empObj } from 'src/app/Interfaces/employee';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  empObj:empObj;

  constructor( private router:Router){
    this.empObj=new empObj();           //initilization
  }

  msg:any="";
  massage:string[]=[];
  isChacked:boolean=false;

  ngOnInit(): void {
  }

  //  getNewId(){
  //   //  debugger;
  //   const oldData=localStorage.getItem('empList');
  //   if(oldData!==null){
  //     const empList=JSON.parse(oldData);
  //     return empList.length+1;

  //   }
  //   else{
  //     return 1;
  //   }
  // }
  addEmp(){
    // debugger;
        // const letestData=this.getNewId();
        // this.empObj.empId=letestData;
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
          alert('Register Successfully');
        this.router.navigateByUrl('/home/emplist');


  }
  filterResults(event:any){
    // alert('checkbox');
   debugger;
   const ms=[];
  // const hobby=[];
  const empList:any=[];

   if(event.target.checked){
             ms.push(event.target.value);
  //   localStorage.setItem('empList.hobby',JSON.stringify( this.empObj.hobby));
  //   console.log(this.empObj.hobby);


}
   else{
     console.log('hi');
   }

  }

    onClick(event:any){
      // debugger

      //  this.empObj.hobby=empList.filter((x:any)=>x.isChecked==true).map((x:any)=>x.name)

      const empList:any=[];


        if(event.target.checked){
          this.msg=event.target.value;
          console.log(this.msg);
          this.empObj.hobby=empList.push(this.msg);
          console.log(this.empObj.hobby);
        }
        else{
         this.msg=event.target.value;
         this.massage.splice(this.msg);
        }




  }

  cancleBtn(){
    this.router.navigateByUrl('/home');
  }


}
