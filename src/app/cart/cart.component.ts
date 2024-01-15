// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/mycart.service';
import { NgFor } from '@angular/common';
import {ProductRequestService} from '../services/product-request.service';

@Component({
  standalone: true,
  imports: [NgFor],
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { product: any; quantity: number }[] = [];
  totalprice:number=0;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    for(let item of this.cartItems) {
      this.totalprice += item.product.price*(item.quantity); 
    }
  }

  increaseQuantity(product: any): void {
    this.cartService.increaseQuantity(product.product);
    this.cartItems = this.cartService.getCart();
    this.totalprice += product.product.price;
  }

  decreaseQuantity(product: any): void {
    if(product.quantity)
    {
      this.cartService.decreaseQuantity(product.product);
      this.totalprice -= product.product.price;

    }
    this.cartItems = this.cartService.getCart();
   
   
  }

  removeFromCart(product: any): void {
    this.totalprice -= product.product.price*product.quantity;
    this.cartService.removeFromCart(product.product);
    this.cartItems = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCart();
    this.totalprice=0;
  }
}
