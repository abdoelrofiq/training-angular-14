import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from "@angular/common";
import { RupiahPipe } from './../../../pipes/rupiah.pipe';
import { sharedImports } from 'src/app/shared/modules.shared';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../dialog/dialog.component';

@Component({
    standalone: true,
    selector: 'product-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    imports: [CommonModule, RupiahPipe, ...sharedImports]
})

export class ListComponent implements OnInit {
    constructor(private productService: ProductService, private dialog: MatDialog) { }
    displayedColumns: string[] = ['position', 'name', 'price', 'actions'];
    dataSource: Product[] = [];
    @Output() edit = new EventEmitter<void>();

    ngOnInit() {
        this.loadData();
    }


    loadData() {
        this.productService.getProducts().subscribe(data => {
            this.dataSource = data.map((p, idx) => ({
                ...p,
                position: idx + 1
            }));
        });
    }

    editProduct(product: any) {
        console.log('Edit:', product);
        this.edit.emit(product);
    }

    deleteProduct(product: any) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: { message: `Yakin ingin menghapus produk "${product.name}"?` }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.productService.deleteProduct(product.id).subscribe(() => {
                    this.loadData();
                });
            }
        });
    }
}