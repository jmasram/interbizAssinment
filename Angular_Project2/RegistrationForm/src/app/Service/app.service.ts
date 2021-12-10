import { inject, Injectable } from "@angular/core";


  @Injectable({
    providedIn:'root'
  })
  export class AppService{

    emoji1 = '🌺';
    alertMassage(){
      alert("welcome to TigerSave");
    }

    food=[{name:'Burger',emoji:'🍔'},
               {name:'Pizza',emoji:'🍕'},
              { name:'Ice Cream',emoji:'🍨'},
              {name:'Cake' ,emoji:'🎂'} ]
  }


  @Injectable({
     providedIn:'platform'
  } )export class CustomService{

    massage="This Is Custom Service ";
  }
