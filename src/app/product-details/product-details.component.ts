import { Component, Input, OnInit } from '@angular/core';
// import products from '../../assets/products.json';
import { CalcDiscPipe} from '../calc-disc.pipe';
import {ProductRequestService} from '../services/product-request.service';
import {CartCounterService} from '../services/cart-counter.service';
import { CartService } from '../services/mycart.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CalcDiscPipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  counter!:number;
  @Input() id?: any;

  constructor(private productrequestService:ProductRequestService, private cartcounterservice: CartCounterService,private  cartService: CartService){}


  ngOnInit() {

    // this.product = this.products.find((product: any) => product.id == this.id);
    this,this.cartcounterservice.getcounter().subscribe(counter => this.counter=counter)
    this.productrequestService.getproductbyid(this.id).subscribe((requestproduct)=>{this.product=requestproduct})
  }

  AddtoCart(product:any){
    this.cartcounterservice.setcounter(this.counter+1);
    this.cartService.addToCart(product);


  }
}
