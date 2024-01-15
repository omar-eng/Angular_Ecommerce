import { Component } from '@angular/core';
import { RouterLinkActive} from '@angular/router';
import { RouterLink } from '@angular/router' ;
import { CartCounterService } from '../services/cart-counter.service';
import {ProductRequestService} from '../services/product-request.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  counter:number = 0;

  constructor(private cartcounterservice:CartCounterService){}

  ngOnInit() {
    this,this.cartcounterservice.getcounter().subscribe(counter => this.counter=counter)
  }

}
