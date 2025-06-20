import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
    private productUrl = environment.apiUrl + 'products';

    constructor(private http: HttpClient, private router: Router) { }

    private handleError(error: any): Observable<never> {
        if (error.status === 401 || error.status === 403) {
            console.warn('Unauthorized or forbidden - logging out...');
            localStorage.clear();
            this.router.navigate(['/login']);
        }
        console.error('Error:', error);
        return throwError(() => error);
    }

    getProducts(page: number, limit: number, search: string): Observable<any> {
        return this.http
            .get<any[]>(`${this.productUrl}?page=${page}&limit=${limit}&search=${search}&sort=id&direction=DESC`)
            .pipe(catchError(error => this.handleError(error)));
    }

    getProductById(id: number): Observable<any> {
        return this.http.get<any>(`${this.productUrl}/${id}`).pipe(catchError(error => this.handleError(error)));
    }

    addProduct(product: any): Observable<any> {
        return this.http.post<any>(this.productUrl, product).pipe(catchError(error => this.handleError(error)));
    }

    updateProduct(id: number, product: any): Observable<any> {
        return this.http.patch<any>(`${this.productUrl}/${id}`, product).pipe(catchError(error => this.handleError(error)));
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete<any>(`${this.productUrl}/${id}`).pipe(catchError(error => this.handleError(error)));
    }
}
