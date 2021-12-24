import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

   //   @Input()name1 :String="";
    value:string='';

  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(){
    // this.value=val.value;
  }

}
