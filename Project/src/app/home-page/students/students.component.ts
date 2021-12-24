import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/Service/app.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private ob:AppService) { }
   stuDetails:any;
   result:any;
   stu:any[]=[];

   isActiveProject=true;
  //  total:any=[];

  ngOnInit(): void {
    debugger;
   this.ob.students().subscribe(StudentData => this.stuDetails=StudentData);

  }



  total(){
   debugger;

    console.log(this.result);
  }

}
