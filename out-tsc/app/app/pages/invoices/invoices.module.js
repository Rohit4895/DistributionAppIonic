import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InvoicesPage } from './invoices.page';
const routes = [
    {
        path: '',
        component: InvoicesPage
    }
];
let InvoicesPageModule = class InvoicesPageModule {
};
InvoicesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [InvoicesPage]
    })
], InvoicesPageModule);
export { InvoicesPageModule };
//# sourceMappingURL=invoices.module.js.map