import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PurchaseOrdersPage } from './purchase-orders.page';
const routes = [
    {
        path: '',
        component: PurchaseOrdersPage
    }
];
let PurchaseOrdersPageModule = class PurchaseOrdersPageModule {
};
PurchaseOrdersPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PurchaseOrdersPage]
    })
], PurchaseOrdersPageModule);
export { PurchaseOrdersPageModule };
//# sourceMappingURL=purchase-orders.module.js.map