import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/Shared/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private s: CustomerService, private router: Router) { }

  ngOnInit() {
  }
  addUser(nf: NgForm) {
    this.s.addUserToDB(nf.value).subscribe
      (
        res => {
          this.router.navigateByUrl('/product');
        },
        err => {

        }
      );
  }

}
