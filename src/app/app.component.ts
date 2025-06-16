import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './components/product/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  standalone: true,
  imports: [CommonModule, ProductComponent, CartComponent, SearchComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  cartItems: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onAddToCart(product: any) {
    console.log('Added to cart:', product);
    this.cartItems.push(product);
  }
}