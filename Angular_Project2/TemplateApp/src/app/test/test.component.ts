import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }


  data:String="Welcome to Angular";

  color=['red','blue'];
  colors=6;
  ngOnInit(): void {
  }

}
