import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {

  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get('https://dummyjson.com/products')
  }

  getproductbyid(id:number){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
