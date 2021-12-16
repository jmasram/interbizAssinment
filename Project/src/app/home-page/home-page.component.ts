import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(public auth:AuthenticationService) {}

  ngOnInit(): void {
  }



}
