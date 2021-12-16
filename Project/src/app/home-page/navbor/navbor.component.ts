import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-navbor',
  templateUrl: './navbor.component.html',
  styleUrls: ['./navbor.component.css']
})
export class NavborComponent implements OnInit {

  constructor(public auth:AuthenticationService) { }

  ngOnInit(): void {
  }

}
