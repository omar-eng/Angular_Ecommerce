import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartCounterService {

  private cart_counter = new BehaviorSubject<number>(0);


  constructor() { }

  getcounter(){
    return this.cart_counter.asObservable();
  }

  setcounter(counterval:number){
    this.cart_counter.next(counterval);
  }
}
