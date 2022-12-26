import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groupcatg } from '../components/groupbycategory/groupbycategory.component';
import { Product } from '../models/product';
// import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private baseURL = "http://localhost:8090";
  private baseURL = "http://invms-env.eba-wxcw82kg.ap-south-1.elasticbeanstalk.com";
    // private baseURL = "http://ec2-43-205-99-101.ap-south-1.compute.amazonaws.com:5000";
   


  success: any;

  constructor(private httpClient: HttpClient) { }

  

  

  addProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/product/addProduct`, product);
  }

  deleteProduct(productId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/product/deleteproduct/${productId}`);
  }
 
  getProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}/product/viewproduct`)
    
  }

  getProductById(productId: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/product/getproductbyid/${productId}`);
  }

  

  updateProduct(productId: number, Product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/product/editproduct`, Product);
  }

  
  retrivegroupcatg(): Observable<Groupcatg[]>{
    return this.httpClient.get<Groupcatg[]>(`${this.baseURL}/product/groupcatg`)
    
  }
  

}
