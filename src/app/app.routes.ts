import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'products',
        loadChildren: () =>
            import('./components/product/product.routes').then(m => m.productRoutes)
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];
