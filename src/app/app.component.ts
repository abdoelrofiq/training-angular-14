import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCrudComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ProductCrudComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}