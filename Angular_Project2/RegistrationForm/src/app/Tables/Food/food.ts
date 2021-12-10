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
  constructor(private msgService:AppService){}// Using Service

  ngOnInit(){

    this.foods=this.msgService.food;
  }
}
