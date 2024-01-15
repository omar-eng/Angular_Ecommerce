import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import {CartCounterService} from '../services/cart-counter.service';
import { CartService } from '../services/mycart.service';

@Component({
  selector: 'app-prodyct-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodyct-card.component.html',
  styleUrl: './prodyct-card.component.css'
})


export class ProdyctCardComponent {

  cartproducts:any[]=[];
  counter:number = 0;

  @Input() product:any;

  constructor(private router: Router, private cartcounterservice: CartCounterService ,private  cartService: CartService ) {
  }


  ngOnInit(){
    this.cartcounterservice.getcounter().subscribe((counter)=>this.counter=counter)
  }
 
  AddtoCart(product:any){

    this.cartService.addToCart(product);
   
    // if("cart" in localStorage){
    //   this.cartproducts=JSON.parse(localStorage.getItem("cart")!);
    //   this.cartproducts.push(product);
    //   localStorage.setItem("cart",JSON.stringify(this.cartproducts));
    // }else{
    //   this.cartproducts.push(product);
    //   localStorage.setItem("cart",JSON.stringify(this.cartproducts));
    // }
    
    // localStorage.setItem('cart', JSON.stringify(product) );

  }

  details(id:number){
    this.router.navigate([`product-details/${Number(id)}`]);
    // console.log(id);
  }

}
