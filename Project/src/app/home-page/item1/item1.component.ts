import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empObj } from 'src/app/Interfaces/employee';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {


  title='localStorage';
  empObj:empObj=new empObj();
  id:any;
  iId:any;


  empForm:FormGroup;
  constructor() {
    this.empForm=new FormGroup({
     empId : new FormControl('',[Validators.required]),
     ename:new FormControl('',[Validators.required]),
     esal:new FormControl('',[Validators.required]),
     emob:new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required]),
     eaddr:new FormControl('')
   });
    //  this.display();
   }


    ngOnInit(): void {


    }

    // aEmp(){
    //   // debugger;
    //   localStorage.setItem("Employee",JSON.stringify(this.empForm.value));
    // }

    // display(){
    //   // debugger;
    //   //  this.id=JSON.parse(localStorage.getItem('product'));
    //   this.id =localStorage.getItem('Employee');
    //      this.iId= JSON.parse(this.id);

    //   console.log(this.iId);
    //   }



 getNewId(){
        debugger;
       const oldData=localStorage.getItem('Employee');
       if(oldData!==null){
         const empList=JSON.parse(oldData);
         return empList.length+1;

       }
       else{
         return 1;
       }
     }
     addEmp(){
       debugger;
           const letestData=this.getNewId();
           this.empObj.empId=letestData;
           const oldData=localStorage.getItem('Employee');
           if(oldData!==null)
           {
             const empList=JSON.parse(oldData)
             empList.push(this.empObj);
             localStorage.setItem('Employee',JSON.stringify(empList));
           }
           else{
             const empArr=[];
             empArr.push(this.empObj);
             localStorage.setItem('Employee',JSON.stringify(empArr));
           }
     }













//   title='localStorage';
//   productForm:FormGroup;
//   id:any;
//   iId:any;

//   empList:empObj[];

//   constructor() {
//     this.empList=[];
//   //***********************
//     this.productForm=new FormGroup({
//       itemid: new FormControl('',[Validators.required]),
//       itemname:new FormControl('',[Validators.required])
//    });

//    this.display();
//    }

//   ngOnInit(): void {

//     const data=localStorage.getItem('empList');
//     if (data!==null) {
//       this.empList=JSON.parse(data); //Fatch Data

//     }
//  }

//     onSubmit(){
//       localStorage.setItem("product",JSON.stringify(this.productForm.value));
//     }

//   display(){
//   //  this.id=JSON.parse(localStorage.getItem('product'));
//    this.id=localStorage.getItem('product');
//      this.iId= JSON.parse(this.id);

//   console.log(this.iId);
//   }

//   removeItem(){
//     localStorage.removeItem('product');
  }








  // delete(empId:any){
  //   debugger;

  //   const oldData=localStorage.getItem('empList');
  //   if(oldData!==null)
  //   {
  //     const empList=JSON.parse(oldData)
  //     empList.splice(empList.findIndex((a:any)=>a.empId== empId),1);
  //     localStorage.setItem('empList',JSON.stringify(empList));
  //   }

  // }
//}

