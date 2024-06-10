import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../type/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = "http://localhost:3000/products";
  http = inject(HttpClient)
  constructor() { }
  getAll() {
    return this.http.get<Product[]>(this.apiURL)
  }
  deletePrd(id: String) {
    return this.http.delete<Product[]>(`${this.apiURL}/${id}`)
  }
  addPrd(product: any) {
    return this.http.post<Product[]>(this.apiURL, product)
  }
  updateProduct(id: string, data: any) {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }
  getProductDetail(id: string) {
    return this.http.get<Product[]>(`${this.apiURL}/${id}`);
  }
}
