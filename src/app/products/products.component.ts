import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdyctCardComponent} from '../prodyct-card/prodyct-card.component';
// import products from '../../assets/products.json';
import {FormsModule} from '@angular/forms';
import {ProductRequestService} from '../services/product-request.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProdyctCardComponent,FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;
 
  title:string='';

  constructor(private productrequestService:ProductRequestService){}

  ngOnInit(){
    this.productrequestService.getproduct().subscribe((requestdata:any)=>this.products = requestdata['products'])
    // console.log(this.products);
  }



}
