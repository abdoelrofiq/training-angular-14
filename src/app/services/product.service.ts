import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) export class ProductService {
    private apiUrl = 'http://localhost:3001/products';
    constructor(private http: HttpClient) { }
    getProducts(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '?page=1&limit=1000').pipe(catchError(error => {
            console.error('Error fetching products', error); return throwError(() => error);
        })
        );
    }

    getProductById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
    addProduct(product: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, product);
    }
    updateProduct(id: number, product: any): Observable<any> {
        return this.http.patch<any>(`${this.apiUrl}/${id}`, product);
    }
    deleteProduct(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}
