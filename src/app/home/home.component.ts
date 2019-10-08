import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Shared/product.service';
import { CategoryService } from '../Shared/category.service';
import { Router } from '@angular/router';
import { CartService } from '../Shared/cart.service';
import { NgForm } from '@angular/forms'
import { CustomerService } from '../Shared/customer.service';
import { Product } from '../product/product.model';
import { Cart } from '../Cart.model';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../Shared/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService, private db: ProductService,
    private cat: CategoryService, private user: CustomerService,
    private router: Router, private cartservice: CartService,
    private _notificationService: NotificationService) { }

  products = [];
  d1: any = [];
  SearchItems: string;

  SearchCategory: string;
  username = localStorage.getItem('name');
  role = localStorage.getItem('role');
  _cart = new Cart();
  ngOnInit() {
    this.getPost();
    this.getCat();


    this._cart.CusId = +localStorage.getItem('cusId');
    return this.cartservice.getCarts(this._cart.CusId).subscribe(
      (res: any) => {
        this._cart = res;
        // console.log(this._cart);

      }
    )

  }

  getPost() {
    this.db.loadProduct().subscribe(
      (responsedata: any) => {
        this.products = responsedata;
        console.log(this.products)
      });
  }

  getCat() {
    this.cat.loadCat().subscribe((respmsed: any) => {
      this.d1 = respmsed
      // console.log(respmsed)
    });
  }

  getProductsByCategoryId(catId: number) {
    // console.log(catId);
    this._notificationService.sendMessage(catId);
  }

  logout() {
    if (localStorage.getItem != null) {
      localStorage.clear();

      this.router.navigateByUrl('/home');
      this.toastr.success("Logout Successfull");
    }
  }
  //****************CART*************** */
  addToCart(product: Product) {
    const cart = new Cart();
    cart.Id = product.id;
    cart.quantity = 1;
    cart.name = product.name;
    cart.Price = product.price;
    // cart.quantity = + cart.quantity;
    // cart.quantity = product.Quantity
    cart.CusId = +localStorage.getItem('cusId');
    this.cartservice.addtocart(cart).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }


  delete(cartId: number) {
    if (confirm("Are you sure?")) {
      console.log("Function work")
      this.cartservice.deletedata(cartId).subscribe(
        (res) => {
          this.ngOnInit();
        },
        (err) => { });

    }

  }

}
