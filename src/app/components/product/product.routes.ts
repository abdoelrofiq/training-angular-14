import { Routes } from '@angular/router';

export const productRoutes: Routes = [
    {
        path: 'list',
        loadComponent: () =>
            import('./product.component').then(m => m.ProductCrudComponent)
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];
