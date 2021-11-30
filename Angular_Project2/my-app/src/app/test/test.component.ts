import { Component, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  test = 'Child Component';

  childData:string ="Data From Child Component";
  @Output() childStringData:EventEmitter<string>= new EventEmitter();
  constructor() { }

sendData()
{
  this.childStringData.emit(this.childData);
}

}
