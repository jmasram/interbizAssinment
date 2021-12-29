import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../remind';




@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

  constructor(public dailogRsf:MatDialogRef<Dialog1Component>, @Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  ngOnInit(): void {
  }
month= new Date();


  onNoClick(){
    this.dailogRsf.close();
  }
}
