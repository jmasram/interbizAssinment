import { Component } from "@angular/core";
import { AppService } from "src/app/Service/app.service";

@Component(
  {
    selector:'food-app',
    templateUrl:'./food.html'
  }
)
export class FoodComponentApp{

  foods:any[]=[];
  constructor(private obser:AppService){}// Using Service  private msgService:AppService

  ngOnInit(){
  debugger;
    // this.foods=this.msgService.food;
    this.obser.foods().subscribe(foodData =>this.foods =foodData);
  }
}
