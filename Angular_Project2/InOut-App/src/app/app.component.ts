import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl  } from '@angular/forms';
export interface cn {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'InOut-App';

  currentItem = 'Television';

  // items = ['item1', 'item2', 'item3', 'item4'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }

// checkboxesDataList = [
//   {
//     id: 'C001',
//     label: 'Photography',
//     isChecked: true
//   },
//   {
//     id: 'C002',
//     label: 'Writing',
//     isChecked: true
//   },
//   {
//     id: 'C003',
//     label: 'Painting',
//     isChecked: true
//   },
//   {
//     id: 'C004',
//     label: 'Knitting',
//     isChecked: false
//   },
//   {
//     id: 'C004',
//     label: 'Dancing',
//     isChecked: false
//   },
//   {
//     id: 'C005',
//     label: 'Gardening',
//     isChecked: true
//   },
//   {
//     id: 'C006',
//     label: 'Drawing',
//     isChecked: true
//   },
//   {
//     id: 'C007',
//     label: 'Gyming',
//     isChecked: false
//   },
//   {
//     id: 'C008',
//     label: 'Cooking',
//     isChecked: true
//   },
//   {
//     id: 'C009',
//     label: 'Scrapbooking',
//     isChecked: false
//   },
//   {
//     id: 'C010',
//     label: 'Origami',
//     isChecked: false
//   }
// ]

form : FormGroup;
cricketerName:cn[]=[
  {id:0, name:'Mr. MS Dhoni'},
  {id:1, name:'Mr. Virat Kohli'},
  {id:2, name:'Mr. Hardik pandya'},
  {id:3, name:'Mr. Rohit Sharma'}
];

constructor(private fb: FormBuilder) { }

  onChange(name: string, isChecked: boolean) {
    const cn = (this.form.controls.name as FormArray);

    if (isChecked) {
      cn.push(new FormControl(name));
    } else {
      const index = cn.controls.findIndex(x => x.value === name);
      cn.removeAt(index);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.array([])
    });
  }

  submit() {
    console.log(this.form.value.name);
  }
}
