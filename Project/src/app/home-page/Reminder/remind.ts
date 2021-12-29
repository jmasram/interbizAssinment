import {Component,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dialog1Component } from './dialog1/dialog1.component';

export interface DialogData {
  event1: string;
  name: string;
}

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-fancy-example',
  templateUrl: 'remind.html',
  styleUrls: ['remind.css'],
})
export class CardApp {

  today=new Date();
  day=new Date();
  time=new Date();

  task: any = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Buy Pizza on the way to work', completed: false, color: 'primary'},
      {name: '10am Meeting', completed: false, color: 'accent'},
      {name: 'Work lunch with the dudes', completed: false, color: 'warn'},
      {name: '4pm Meeting With Wife', completed: false, color: 'primary'},
      {name: '6pm Evening Walk', completed: false, color: 'accent'},
      {name: 'Dinner', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    debugger;
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every((t:any) => t.completed);
  }

  // someComplete(): boolean {
  //   debugger;
  //   if (this.task.subtasks == null) {
  //     return false;
  //   }
  //   return this.task.subtasks.filter((t:any) => t.completed).length > 0 && !this.allComplete;
  // }



  constructor(public dialog:MatDialog){}
  event1: string='';
  event2:any=[];
  openDialog():void{
    debugger;
      const dialogData=this.dialog.open(Dialog1Component,{width: '250px' ,data:{event1: this.event1}});
      // console.log(dialogData);

      dialogData.afterClosed().subscribe(res => { console.log('The dialog was closed');

      this.event1 =res;

    })
  }

}

