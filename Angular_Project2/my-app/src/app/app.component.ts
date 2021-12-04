import { Component } from '@angular/core';
// import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Jaleshwari Masram';
  myName:string="jjjjvvv";

  chiledDataReceived: string ="";

  ReceiveData(event:string){
    console.log(event);
    this.chiledDataReceived=event;
  }

  onSubmit(value: any){
    console.log(value);
  }
}
