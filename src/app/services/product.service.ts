import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../components/product/product.model';
@Injectable({
    providedIn: 'root' // Decorator @Injectable 
})
export class ProductService {
    private apiUrl = 'https://fakestoreapi.com/products';
    constructor(private http: HttpClient) { }
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl); // Type safety
    }
}  