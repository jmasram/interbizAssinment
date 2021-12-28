import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'angularmaterial.html',
  styleUrls: ['angularmaterial.css'],
})
export class AngularMaterialExample {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];


  hidden = false;

  toggleB() {
    this.hidden = !this.hidden;
  }

  // filteredOptions!: Observable<string[]>;

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value)),
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }




  task: any = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
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
}
