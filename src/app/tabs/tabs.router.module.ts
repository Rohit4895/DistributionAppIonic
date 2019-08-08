import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'invoices',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/invoices/invoices.module').then(m => m.InvoicesPageModule)
          }
        ]
      },
      {
        path: 'inventory',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/inventory/inventory.module').then(m => m.InventoryPageModule)
          }
        ]
      },
      {
        path: 'purchase-orders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/purchase-orders/purchase-orders.module').then(m => m.PurchaseOrdersPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/invoices',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/invoices',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
