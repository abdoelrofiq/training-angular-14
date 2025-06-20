import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'products',
        loadChildren: () =>
            import('./components/product/product.routes').then(m => m.productRoutes),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadComponent() {
            return import('./components/login/login.component').then(m => m.LoginComponent);
        },
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];
