import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map