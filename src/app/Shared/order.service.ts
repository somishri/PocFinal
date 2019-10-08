import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getProductbyId(id: number) {
    return this.http.get(this.url+'/'+id);
  }
url:string='https://localhost:5001/api/order';

  loadorder()
  {
    return this.http.get(this.url);
  }
  addorderToDB(obj:any)
  {
    console.log("inside s file");
    console.log(obj);
    return this.http.post('https://localhost:5001/api/order/',obj);
  }
 
  updatedb(obj:any)
  {
    console.log("service PRODUCT");
    console.log(obj);
    return this.http.put('https://localhost:5001/api/order',obj)
  }
  deletedata(id:any)
  {
    return this.http.delete('https://localhost:5001/api/order/'+id)
  }
}
