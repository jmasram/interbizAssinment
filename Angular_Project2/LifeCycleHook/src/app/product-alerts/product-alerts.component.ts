import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

      @Input()name1 :String="";


  constructor() { }

  ngOnInit(): void {
  }

}
