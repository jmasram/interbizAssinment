import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";


  @Injectable({
    providedIn:'root'
  })
  export class AppService{


    constructor(private http:HttpClient){}

     url='http://localhost:3000/Students';

    //type observable
    students():Observable<any>{
       return this.http.get(this.url);
    }

    // userName=new Subject<any>();
  }


