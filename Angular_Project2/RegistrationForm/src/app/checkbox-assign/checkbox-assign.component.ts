import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkbox-assign',
  templateUrl: './checkbox-assign.component.html',
  styleUrls: ['./checkbox-assign.component.css']
})
export class CheckboxAssignComponent implements OnInit {

  virat:String="Virat Kohli";
  constructor() {

  }

  ngOnInit(): void {

  }
  onClick(){
    console.log(this.virat);
  }

}
