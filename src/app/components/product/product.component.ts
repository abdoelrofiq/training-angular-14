import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
    standalone: true,
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    @Input() product!: Product;
    @Output() addToCart = new EventEmitter<Product>();
}