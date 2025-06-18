import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // default ke dashboard
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transaksi', component: TransactionFormComponent },
];
