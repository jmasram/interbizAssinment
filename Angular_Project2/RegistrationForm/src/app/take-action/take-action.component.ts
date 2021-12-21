import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { AppService, CustomService } from '../Service/app.service';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { filter,map } from 'rxjs';

@Component({
  selector: 'app-take-action',
  templateUrl: './take-action.component.html',
  styleUrls: ['./take-action.component.css'],
})
export class TakeActionComponent implements OnInit {

  constructor(private msgSrvice: AppService,private m1:CustomService) {

    // This function runs when subscribe() is called
function sequences(observer: Observer<number>) {
  // synchronously deliver 1, 2, and 3, then complete
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();

  // unsubscribe function doesn't need to do anything in this
  // because values are delivered synchronously
  return {unsubscribe() {}};
}

// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequences);

// execute the Observable and print the result of each notification
sequence.subscribe({
  next(num) { console.log(num); },
  complete() { console.log('Finished sequence'); }
});


function squeSubscribe(ob:Observer<string>){

  ob.next("welcome");
  ob.next('to');
  ob.next('my Project');
  ob.complete();

}

const squenceSub=new Observable(squeSubscribe);

squenceSub.subscribe(
  {next(ob){
    console.log(ob+" :ob");},
    complete(){console.log("Finish");}

  })

  //Using pipe method   to combine multiple function into a single function.
debugger;
 const squareOdd=of(1,2,3).pipe(
                 filter(n =>n%2 ==0),
                  map(y =>y*y));

     //Suscribe to get values
     squareOdd.subscribe( x=> console.log(x));

     console.log(squareOdd);

  }
  emoji1 = '';
  msg = '';
  foods: any[] = [];

  ngOnInit(): void {
    this.emoji1 = this.msgSrvice.emoji1;
    this.foods = this.msgSrvice.food;
    this.msg=this.m1.massage;

    //console.log(this.foods);

  }

  alertMassage() {
    this.msgSrvice.alertMassage();
  }



}
