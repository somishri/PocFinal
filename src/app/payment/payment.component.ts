import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { PaymentService } from '../Shared/payment.service';
import { Router } from '@angular/router';
import { payment } from './payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private toastr:ToastrService,private paymentservice:PaymentService,private router:Router) { }
  payment:payment;
  data:[];
  ngOnInit() {
    this.payment = new payment();
    this.payment.cusId = localStorage.getItem('cusId');
    console.log(this.payment.cusId);

      
 
  }

addPayment(nf:NgForm)
{
  nf.value.cusId = localStorage.getItem('cusId')
  this.toastr.success("Order successfuly placed");

  this.paymentservice.addPaymentToDb(nf.value).subscribe
  (
    res=>
    {
        this.router.navigateByUrl('/home');
    },
    err=>
    {

    }
  );
}
  
}