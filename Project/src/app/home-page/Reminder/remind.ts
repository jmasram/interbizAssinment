import {Component,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
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

  someComplete(): boolean {
    debugger;
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter((t:any) => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    debugger;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t:any) => (t.completed = completed));
  }


  animal: string='';
  name: string='';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
