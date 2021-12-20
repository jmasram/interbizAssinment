import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";


  @Injectable({
    providedIn:'root'
  })
  export class AppService{

    emoji1 = '🌺';
    alertMassage(){
      alert("welcome to TigerSave");
    }

    constructor(private http:HttpClient){}


    food=[{name:'Burger',emoji:'🍔'},
               {name:'Pizza',emoji:'🍕'},
              { name:'Ice Cream',emoji:'🍨'},
              {name:'Cake' ,emoji:'🎂'} ]

    //type observable
    foods():Observable<any>{
       return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    // userName=new Subject<any>();
  }


  @Injectable({
     providedIn:'platform'
  } )export class CustomService{

    massage="This Is Custom Service ";
  }
