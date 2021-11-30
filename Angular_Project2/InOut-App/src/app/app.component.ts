import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl  } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InOut-App';

  currentItem = 'Television';

}
