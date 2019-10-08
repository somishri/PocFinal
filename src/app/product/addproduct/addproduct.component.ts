import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import {ProductService} from 'src/app/Shared/product.service';
import {Router,ActivatedRoute} from '@angular/router';
import { CategoryService } from 'src/app/Shared/category.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private db : ProductService,private cat: CategoryService,private router : Router) { }
data1:any[];
  ngOnInit() {
  
    this.getCat();
  }
//   addProduct(nf:NgForm)
//   {
//     console.log("inside ts file");
//     console.log(nf.value);
//  this.db.addProductToDB(nf.value).subscribe(()=>{
//       this.router.navigate(['/product']); 
//     });
//   }
addProduct(nf:NgForm)
{
  this.db.addProductToDB(nf.value).subscribe
  (
    res=>
    {
        this.router.navigateByUrl('/product');
    },
    err=>
    {

    }
  );
}
  getCat()
  {
    this.cat.loadCat().subscribe((respmsed:any)=>{
      this.data1=respmsed
      console.log("Inside res")
      console.log(respmsed)
    },
    err=>{
      console.log("Inside err")
      console.log(err)
    });
  }
 }
