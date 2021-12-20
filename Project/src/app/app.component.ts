import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  constructor(public auth:AuthenticationService){}

  ngOnInit(){
    debugger;
     $(document).ready(function () {
    
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
      
      });
  }
  
}
