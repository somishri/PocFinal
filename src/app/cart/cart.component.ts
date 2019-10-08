import { Component, OnInit } from '@angular/core';
import { CartService } from '../Shared/cart.service';
import { Cart } from '../Cart.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts :Cart[]=[];
  cusId : number;
 cartTotal:number;

 displayButton = false

  constructor(private cartservice: CartService, private router: Router) { }
  
  ngOnInit() {
      

   this.cusId = +localStorage.getItem('cusId');
    this.cartservice.getCarts(this.cusId).subscribe(
      (responsedata: any) =>
       { this.carts = responsedata ;
        console.log("Inside rsponss data")
        if(responsedata.length >0)
        {
            this.displayButton = true
        }
        else{
          this.displayButton = false
        }
         this.cartTotal = this.carts
            .map(item => item.amount)
            .reduce((prev, next) => prev + next);
      });

  }
  
  delete(cartId : number)
  {
    if(confirm("Are you sure?"))
    {
      console.log("Function work")
      this.cartservice.deletedata(cartId).subscribe(
      (res)=>
      {
        this.ngOnInit();
      },
      (err)=>
      {});
      
    }

  }
  addToCart(cart : Cart) {
 
    cart.Id ;
    cart.quantity = 1;
    cart.name ;
    cart.Price;
    // cart.quantity = + cart.quantity;
    // cart.quantity = product.Quantity
    cart.CusId = +localStorage.getItem('cusId');
    this.cartservice.addtocart(cart).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  

}}

