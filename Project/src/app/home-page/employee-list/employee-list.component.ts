import { Component, OnInit } from '@angular/core';
import { empObj } from 'src/app/Interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  

  emplist:empObj[];
  constructor() { 
    this.emplist=[];
  }

  ngOnInit(): void {
  }

}
