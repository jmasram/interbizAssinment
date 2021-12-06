import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkbox-assign',
  templateUrl: './checkbox-assign.component.html',
  styleUrls: ['./checkbox-assign.component.css']
})
export class CheckboxAssignComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {

  }

  msg:any="";
  massage:string[]=[];

  isChacked:boolean=true;
  onClick(event:any){


    this.msg=event.target.value;
       this.massage.push(this.msg);



  console.log(event);
  }

}
