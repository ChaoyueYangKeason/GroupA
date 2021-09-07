import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
const routes = [
    { path: '', component: ProductsComponent, pathMatch: 'full' },
    { path: 'product/:id', component: ProductComponent },
    { path: 'add', component: ProductAddEditComponent },
    { path: 'product/edit/:id', component: ProductAddEditComponent },
    { path: '**', redirectTo: '/' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map