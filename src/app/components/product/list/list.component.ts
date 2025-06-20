import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from "@angular/common";
import { RupiahPipe } from './../../../pipes/rupiah.pipe';
import { sharedImports } from 'src/app/shared/modules.shared';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { firstValueFrom } from 'rxjs';

@Component({
    standalone: true,
    selector: 'product-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    imports: [CommonModule, RupiahPipe, ...sharedImports]
})

export class ListComponent {
    constructor(private productService: ProductService, private dialog: MatDialog) { }
    displayedColumns: string[] = ['position', 'name', 'price', 'actions'];
    dataSource: Product[] = [];
    @Output() edit = new EventEmitter<void>();
    totalRows: number = 0;
    defaultPageSize: number = 5;
    currentPage: number = 1;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    async ngAfterViewInit() {
        await this.loadData(this.currentPage, this.defaultPageSize);
    }

    async loadData(page: number = this.currentPage, limit: number = this.defaultPageSize, search: string = '') {
        try {
            const res: any = await firstValueFrom(this.productService.getProducts(page, limit, search));
            const products = res?.response?.data || [];
            this.dataSource = products.map((p: any, idx: number) => ({
                ...p,
                position: ((page - 1) * limit) + idx + 1
            }));
            this.totalRows = res?.response?.pagination?.totalRows || 0;
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
                    this.paginator.firstPage();
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
        let searchTerm = '';

        if (!isNaN(query) && query !== '') {
            searchTerm = `name CONTAINS "${query}" OR price = ${query}`;
        } else {
            searchTerm = `name CONTAINS "${query}"`;
        }

        this.paginator.firstPage();
        await this.loadData(this.currentPage, this.defaultPageSize, searchTerm);
    }

    async onPageChange(event: PageEvent) {
        console.log('Page index:', event.pageIndex);
        console.log('Page size:', event.pageSize);
        console.log('Previous page index:', event.previousPageIndex);
        await this.loadData(event.pageIndex + 1, event.pageSize);
    }

    async resetTable() {
        this.paginator.firstPage();
        await this.loadData();
    }
}