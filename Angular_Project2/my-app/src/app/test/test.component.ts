import { Component} from '@angular/core';

@Component({
  selector: '[test]',
  template: `<div>Inline template</div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  test = 'Hello, World!';
  constructor() { }



}
