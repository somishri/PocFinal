import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Shared/product.service';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/Shared/category.service';
import {ProductComponent} from'../product.component';
import { from } from 'rxjs';
@Component(
  {
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
  })
export class UpdateComponent implements OnInit
{
  proId: number;
  data1:any;
  product: any;
  constructor(private activateroute: ActivatedRoute, private db: ProductService, private router: Router,private cat : CategoryService) { }

  ngOnInit() 
  {
    this.getCat();
    this.proId = +this.activateroute.snapshot.paramMap.get('id');
    this.db.getProductbyId(this.proId).subscribe((respnsed: any) => 
    {
     
      this.product = respnsed;
    },
      err => 
      {
        console.log(err)
      })
  }
  id:number = this.proId;
  
 
  updateProduct(nf:NgForm)
  {
    
    this.db.updatedb(nf.value).subscribe(()=>this.router.navigate(['/product']));
    
    console.log(this.proId);
  

  }
  getCat()
  {
    this.cat.loadCat().subscribe((respmsed:any)=>{
      this.data1=respmsed,
      console.log(this.data1)
  
    },
    err=>{
      console.log("Inside err")
    
    });
  }

}


