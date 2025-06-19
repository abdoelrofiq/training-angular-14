import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from "@angular/common";
import { RupiahPipe } from './../../../pipes/rupiah.pipe';
import { sharedImports } from 'src/app/shared/modules.shared';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

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

    async ngOnInit() {
        await this.loadData();
    }


    async loadData() {
        try {
            const res: any = await this.productService.getProducts().toPromise();
            const products = res?.response?.data || [];
            this.dataSource = products.map((p: any, idx: number) => ({
                ...p,
                position: idx + 1
            }));
        } catch (err) {
            console.error('Failed to load data:', err);
        }
    }

    editProduct(product: any) {
        console.log('Edit:', product);
        this.edit.emit(product);
    }

    deleteProduct(product: any) {
        const dialogRef = this.dialog.open(DialogComponent, {
            data: { message: `Yakin ingin menghapus produk "${product.name}"?`, isConfirm: true, header: 'Konfirmasi' }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.productService.deleteProduct(product.id).subscribe(() => {
                    this.loadData();
                    this.dialog.open(DialogComponent, {
                        data: { message: `Produk berhasil dihapus`, isConfirm: false, header: 'Sukses' }
                    });
                });
            }
        });
    }

    async search(event: any) {
        const query = event.target.value;
        await this.loadData();
        this.dataSource = this.dataSource.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).map((p, idx) => ({
            ...p,
            position: idx + 1
        }));
    }
}