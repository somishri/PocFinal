import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Shared/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../Shared/category.service';
import { NotificationService } from '../Shared/notification.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component(
  {
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
  }
)
export class ProductComponent implements OnInit {

  constructor(private se: ProductService,private toastr:ToastrService, private router: Router, private cat: CategoryService, private _notificationService: NotificationService) { }
  data: any[];
  data1: any[];
  subscription: Subscription;
  role = localStorage.getItem('role');

  ngOnInit() {

    this.subscription = this._notificationService.getMessage().subscribe(catId => { 
 
      console.log(catId)});
    this.se.loadProduct().subscribe((r: any) => {
    this.data = r

    });
  }
  onDelete(id: any) {
    if (confirm("Are you sure?")) {
      this.se.deletedata(id).subscribe(
        (res) => {
          this.router.navigate(['/product']);
          this.ngOnInit();
        },
        (err) => { });
    }
    this.ngOnInit();
  }
  getCat() {
    this.cat.loadCat().subscribe((respmsed: any) => {
      this.data1 = respmsed
      console.log("Inside res")
      console.log(respmsed)
    },
      err => {
        console.log("Inside err")
        console.log(err)
      });
  }
  logout() {
    if (localStorage.getItem != null) {
      localStorage.clear();

      this.router.navigateByUrl('/home');
      this.toastr.success("Logout Successfull");
    }
  }
}
