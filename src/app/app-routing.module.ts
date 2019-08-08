import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' }
  // { path: 'invoices', loadChildren: './pages/invoices/invoices.module#InvoicesPageModule' },
  // { path: 'inventory', loadChildren: './pages/inventory/inventory.module#InventoryPageModule' },
  // { path: 'purchase-orders', loadChildren: './pages/purchase-orders/purchase-orders.module#PurchaseOrdersPageModule' },
  // { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
