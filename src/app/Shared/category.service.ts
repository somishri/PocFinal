import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {
  url:string ='https://localhost:5001/api/Category/';
  constructor(private https:HttpClient) { }
  loadCat()
  {
    return this.https.get(this.url)
  }
  
}
