import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent {

  constructor() { }

  @Input() item='';//decorate the property with @Input

  @Output() newItemEvent = new EventEmitter<string>();



}
