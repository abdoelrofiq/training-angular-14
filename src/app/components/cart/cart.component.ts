import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product/product.model';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./cart.component.html`
})

export class CartComponent {
  @Input() items: Product[] = [];
}