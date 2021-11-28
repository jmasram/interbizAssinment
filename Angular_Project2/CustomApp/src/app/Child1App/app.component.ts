import { Component} from "@angular/core";

@Component({
  selector:'app-top-bar',
  template:`<h1 color>Hello Angular </h1>
             <h2>{{disp}}</h2>`
})
export class Child1Component{

  public disp:String ="IC-Project";
  constructor(){
    console.log("Welcome");
  }
}


@Component({
  selector:'app-top-bar2',
  template:`<h1>Hello Angular </h1>
             <h2>{{disp2}}</h2>`
})
export class CustComponent{

 public disp2:String ="2+2";
}

