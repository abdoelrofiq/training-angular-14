import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedImports } from '../../../shared/modules.shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { DialogComponent } from '../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [CommonModule, ...sharedImports],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  productForm: FormGroup;
  isCreate: boolean = true;
  productDetails: any = null;
  @Output() saved = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private dialog: MatDialog
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  submit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    if (this.productForm.valid) {
      console.log('Form data:', this.productForm.value);
      if (this.isCreate) {
        this.productService.addProduct(this.productForm.value).subscribe(data => {
          console.log(data);
          this.dialog.open(DialogComponent, {
            data: { message: `Produk berhasil disimpan`, isConfirm: false, header: 'Sukses' }
          });
          this.saved.emit();
          this.productForm.reset();
        });
      } else {
        this.productService.updateProduct(this.productDetails.id, this.productForm.value).subscribe(data => {
          console.log(data);
          this.dialog.open(DialogComponent, {
            data: { message: `Produk berhasil diperbarui`, isConfirm: false, header: 'Sukses' }
          });
          this.saved.emit();
          this.productForm.reset();
        })
      }

    }
  }

  cancel() {
    this.isCreate = true;
    this.productForm.reset();
  }

  editProduct(product: any) {
    this.isCreate = false;
    this.productDetails = product;
    this.productForm.patchValue(product);
  }
}
