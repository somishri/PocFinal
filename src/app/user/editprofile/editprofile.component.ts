
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Shared/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private profile:CustomerService,private activateroute:ActivatedRoute,private router:Router) { }
  CusId : any;
  profileupdate:[]=[];
  Customer:any
  ngOnInit() {
    this.CusId=this.activateroute.snapshot.paramMap.get('id');
    this.profile.getUserbyId(this.CusId).subscribe((respnsed: any) => 
    {
     
      this.Customer = respnsed;
    },
      err => 
      {
        console.log(err)
      })
  }
id:number=this.CusId;
UpdateProfile(nf:NgForm)
  {
    
    this.profile.updatedb(nf.value).subscribe(()=>this.router.navigate(['/home']));
    
    console.log(this.CusId);
  

  }
}
