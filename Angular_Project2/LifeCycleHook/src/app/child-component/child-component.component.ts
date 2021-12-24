import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() myValue="Lifecyclehook";

  constructor() { }

  ngOnInit(): void {
  }

}
