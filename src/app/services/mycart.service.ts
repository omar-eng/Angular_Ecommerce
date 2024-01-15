import { Injectable } from '@angular/core';
import {CartCounterService} from './cart-counter.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  counter:number = 0;

constructor( private cartcounterservice: CartCounterService){}
ngOnInit(){
  this.cartcounterservice.getcounter().subscribe((counter)=>this.counter=counter)
}

  private cart: { product: any; quantity: number }[] = [];

  getCart(): { product: any; quantity: number }[] {
    // return this.cart;
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
      return this.cart;

  }

  addToCart(product: any): void {
    const existingItem = this.cart.find((item) => item.product.id === product.id);
 
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }

    this.updateLocalStorage();
    // this.counter++;
    // this.cartcounterservice.setcounter(this.counter);

  }

  removeFromCart(product: any): void {
    const index = this.cart.findIndex((item) => item.product.id === product.id);
  
    if (index !== -1) {
      const item = this.cart[index];
      if (item.quantity > 1) {
        this.cart.splice(index, 1);
      } else {
        this.cart.splice(index, 1);
      }

      this.updateLocalStorage();

      
      
    }
  

  }

  increaseQuantity(product: any): void {
    const existingItem = this.cart.find((item) => item.product.id === product.id);


    if (existingItem) {
      existingItem.quantity++;
      this.updateLocalStorage();
      // this.counter++;
      // this.cartcounterservice.setcounter(this.counter);
    }


  }

  decreaseQuantity(product: any): void {
    const existingItem = this.cart.find((item) => item.product.id === product.id);
   
    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--;
      this.updateLocalStorage();
      

    }
  }

  clearCart(): void {
    this.cart = [];
    this.updateLocalStorage();
    this.counter = 0;
    this.cartcounterservice.setcounter(this.counter);

  }

  private updateLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartcounterservice.setcounter((this.cart).length);
    

  }
}
