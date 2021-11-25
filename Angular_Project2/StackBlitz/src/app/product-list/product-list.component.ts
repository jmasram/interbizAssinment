import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // name="Jaleshwari Masram";
  // products:String=""

    public name: String ="";
    public code: String ="";
    // public price:number=
   public previousprice:number=500;
    public price=556;

    public  positiveChange:boolean= true;

    public favorite: boolean =false;

  constructor() { }

  ngOnInit(): void {
     this.name='Test Stock Company';
     this.code='TSC';
    //  this.price=3455;
    //  this.previousprice=800;
    this.positiveChange=this.price>=this.previousprice;
  }

  toggleFavorite() {
    console.log('We are toggling the favorite state for this stock');
    this.favorite = !this.favorite;
    }

}
