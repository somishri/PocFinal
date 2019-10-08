import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../Cart.model';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,private fb:FormBuilder) { }
 

  addtocart(cart:Cart)
  {
    return this.http.post('https://localhost:5001/api/Cart/',cart);
  }
 
    

// public getCart(model:Cart)
//   {
// return this.http.post('https://localhost:5001/api/Cart/getCart', model);
//   }

getCarts(id:any)
{
  return this.http.get('https://localhost:5001/api/Cart/getCartItemByUserID/'+id);
}

deletedata(cartId:number)
  {
    console.log("Service works")
    return this.http.delete('https://localhost:5001/api/Cart/'+cartId)
  }
}
