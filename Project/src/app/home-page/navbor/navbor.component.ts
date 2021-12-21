import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbor',
  templateUrl: './navbor.component.html',
  styleUrls: ['./navbor.component.css']
})
export class NavborComponent implements OnInit {


  constructor(public auth:AuthenticationService) {}

  ngOnInit(): void {
    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });

      });
  }
}
