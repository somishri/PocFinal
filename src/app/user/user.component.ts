import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../Shared/customer.service';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { RegistrationComponent } from './registration/registration.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  errorMessage = '';
  constructor(private toastr:ToastrService,private db: CustomerService, private router: Router, private authService: AuthService) { }

  ngOnInit() {

  }
  addlogin(nf: NgForm) {
    this.db.addlogin(nf.value).subscribe(
      (res: any) => {
        if (res.length > 0) {
          console.log(res);
          this.toastr.success("Login successfull");
          this.errorMessage = '';
          localStorage.setItem('token', res[0]);
          localStorage.setItem('name', res[1]);
          localStorage.setItem('role', res[2]);
          localStorage.setItem('cusId', res[3]);
        }

        if (localStorage.getItem('token') && localStorage.getItem('token') != null) {
          let check = this.authService.getRole();
          if (check) {
            this.router.navigate(['/product']);
          }
          else {
            this.router.navigate(['/home']);
          }
        }
        else {
          // this.router.navigate(['forbidden']);
         alert(this.errorMessage = "Invalid user name or password");
        }
      },
      err => {

      }

    )

  }

}
