import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url:string='https://localhost:5001/api/Payment';
  constructor(private http:HttpClient) { }

  addPaymentToDb(obj:any)
  {
    console.log("inside s file");
    console.log(obj);
    return this.http.post('https://localhost:5001/api/Payment/',obj);
  }
}
