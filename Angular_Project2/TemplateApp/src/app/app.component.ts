import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateApp';

  customers = [{value: 'keybord'}, {value: 'mouse'},{value:'cpu'},{value:450}];
  customer = 'Jaleshwari masram';
  number=[1,2,3,4,5,67,8,9,0];
  birthday="12/16/2000";

  name:string="Angular";
}
