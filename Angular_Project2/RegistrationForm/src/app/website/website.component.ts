import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor(private auths:AuthenticationService) {}

  show:boolean=false;
  ngOnInit(): void {
    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });

      });
  }

  showComponent(){
    this.show = true;
  }

  logout(){
    this.auths.logout();
  }

}
