import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { Router } from '@angular/router';
import { sharedImports } from 'src/app/shared/modules.shared';

@Component({
    selector: 'app-product-crud',
    standalone: true,
    imports: [
        CommonModule,
        ListComponent,
        FormComponent, ...sharedImports
    ],
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductCrudComponent {
    @ViewChild('productList') productList!: ListComponent;
    @ViewChild('productForm') productForm!: FormComponent;

    constructor(private router: Router) { }

    logout(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
