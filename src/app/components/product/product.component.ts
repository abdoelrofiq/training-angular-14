import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@Component({
    selector: 'app-product-crud',
    standalone: true,
    imports: [
        CommonModule,
        ListComponent,
        FormComponent
    ],
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductCrudComponent {
    @ViewChild('productList') productList!: ListComponent;
    @ViewChild('productForm') productForm!: FormComponent;
}
