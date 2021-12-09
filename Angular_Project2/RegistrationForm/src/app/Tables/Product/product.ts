import { Component } from "@angular/core";

@Component({
            selector:'app-product',
            templateUrl:'./product.html',
            styleUrls: ['./product.css']
})
export class ProductComponent{

  product:any=[{ id:1,
              title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
              price:109.12,
             description:"Your perfect pack for everyday use and walks in the fores",
             category:"men's clothing",
            rating:{
               rate:3.9,
               count:430},
               imgUrl:'../assets/img/ring.jpg',
            },
            { id:2,
              title:"Mens Casual Premium Slim Fit T-Shirts ",
              price: 22.3,
             description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket",
             category:"men's clothing",
              rating:{
              rate: 4.7,
              count:100
               },
               imgUrl:'../assets/img/t-shirt.jpg',
            },

            { id:3,
              title:"Mens Cotton Jacket",
              price: 55.99,
             description:"Slim-fitting style, contrast raglan long sleeveFrom our Legends Collection. ",
             category:"men's clothing",

             rating:{
              rate: 4.1,
              count:400
           },
           imgUrl:'../assets/img/bag.jpg',
            },

            { id:4,
              title:"Mens Cotton Jacket",
              price: 168,
             description:"Satisfaction Guaranteed",
             category:"men's clothing",

             rating:{
              rate: 4.6,
              count:70
           },
           imgUrl:'../assets/img/ring.jpg',
            }




]

  constructor(){}
}
