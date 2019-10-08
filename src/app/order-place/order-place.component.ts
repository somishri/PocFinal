import { Component, OnInit } from '@angular/core';
import { CartService } from '../Shared/cart.service';
import { Cart } from '../Cart.model';
import { OrderService } from '../Shared/order.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { order } from './order.model';


@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.css']
})
export class OrderPlaceComponent implements OnInit {
  
  constructor(private orderservice: OrderService,private router: Router) { }
  data:any[];
  data1:any[];
order:order;
  ngOnInit() 
  {
    this.order = new order();
    this.order.cusId = localStorage.getItem('cusId');
    console.log(this.order.cusId);

    this.orderservice.loadorder().subscribe((r:any)=>{this.data=r
      
    });
  }
  // onDelete(id:any)
  // {
  //   if(confirm("Are you sure?"))
  //   {
  //     this.orderservice.deletedata(id).subscribe(
  //     (res)=>
  //     {
  //       this.router.navigate(['/product']);
  //       this.ngOnInit();
  //     },
  //     (err)=>
  //     {});
  //   }
  //   this.ngOnInit();
  // }
  addOrder(nf:NgForm)
{
  nf.value.cusId = localStorage.getItem('cusId')
  this.orderservice.addorderToDB(nf.value).subscribe
  (
    res=>
    {
        this.router.navigateByUrl('/payment');
    },
    err=>
    {

    }
  );
}
 
}
