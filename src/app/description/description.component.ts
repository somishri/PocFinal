import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Shared/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private product: ProductService,private route:ActivatedRoute) { }
ProductId : any;
products:any;
description:any[];
  ngOnInit() {
    this.ProductId=this.route.snapshot.paramMap.get('id');
    console.log(this.ProductId);  
    this.product.getProductbyId(this.ProductId).subscribe(
      (res: any) => {
        console.log(res),
        this.products = res;
        this.description = this.products.productDescription;
        console.log(this.description);
      },
      err => {
        console.log(err);
      }
    );
  }
    
  }

