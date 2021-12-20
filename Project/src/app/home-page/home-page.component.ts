import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import * as $ from 'jquery';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(public auth:AuthenticationService) {}

  ngOnInit(): void {
    // $(document).ready(function () {
    
    //   $('#sidebarCollapse').on('click', function () {
    //       $('#sidebar').toggleClass('active');
    //   });
      
    //   });
  }



}
