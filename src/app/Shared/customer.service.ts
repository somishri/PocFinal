import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
  getUserbyId(id: number) {
    return this.http.get(this.url1+'/'+id);
  }
  url1: string='https://localhost:5001/api/Customer';

  constructor(private http: HttpClient) { }
  addUserToDB(obj1:any)
  {
    return this.http.post('https://localhost:5001/api/Customer/',obj1);
 }
 addlogin(obj)
 {
   return this.http.post('https://localhost:5001/api/Login',obj);
 }
 updatedb(obj:any)
 {
   console.log("service PRODUCT");
   console.log(obj);
   return this.http.put('https://localhost:5001/api/user',obj)
 }
 }
 