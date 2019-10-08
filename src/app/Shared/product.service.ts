import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgModule} from '@angular/core'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductbyId(id: number) {
    return this.http.get(this.url+'/'+id);
  }
url:string='https://localhost:5001/api/Product';
  constructor(private http:HttpClient) { }
  loadProduct()
  {
    return this.http.get(this.url);
  }
  addProductToDB(obj:any)
  {
    console.log("inside s file");
    console.log(obj);
    return this.http.post('https://localhost:5001/api/Product/',obj);
  }
  // updatedb(id:number,obj:any)
  // {
  //   console.log(id);
  //   console.log(obj)
  //   return this.http.put('https://localhost:5001/api/Product/'+id,obj)
  // }
  updatedb(obj:any)
  {
    console.log("service PRODUCT");
    console.log(obj);
    return this.http.put('https://localhost:5001/api/Product',obj)
  }
  deletedata(id:any)
  {
    return this.http.delete('https://localhost:5001/api/Product/'+id)
  }
}


