import { Component, OnInit } from '@angular/core';
import { AppService, CustomService } from '../Service/app.service';

@Component({
  selector: 'app-take-action',
  templateUrl: './take-action.component.html',
  styleUrls: ['./take-action.component.css'],
})
export class TakeActionComponent implements OnInit {

  constructor(private msgSrvice: AppService,private m1:CustomService) {}
  emoji1 = '';
  msg = '';
  foods: any[] = [];

  ngOnInit(): void {
    this.emoji1 = this.msgSrvice.emoji1;
    this.foods = this.msgSrvice.food;
    this.msg=this.m1.massage;

    //console.log(this.foods);

  }

  alertMassage() {
    this.msgSrvice.alertMassage();
  }
}
