import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {


  title='localStorage';
  productForm:FormGroup;
  id:any;
  iId:any;

  constructor() {

    this.productForm=new FormGroup({
      itemid: new FormControl('',[Validators.required]),
      itemname:new FormControl('',[Validators.required])
   });

   this.display();
   }

  ngOnInit(): void {
 }

    onSubmit(){
      localStorage.setItem("product",JSON.stringify(this.productForm.value));
    }

  display(){
  //  this.id=JSON.parse(localStorage.getItem('product'));
   this.id=localStorage.getItem('product');
     this.iId= JSON.parse(this.id);

  console.log(this.iId);
  }

  removeItem(){
    localStorage.removeItem('product');
  }
}
