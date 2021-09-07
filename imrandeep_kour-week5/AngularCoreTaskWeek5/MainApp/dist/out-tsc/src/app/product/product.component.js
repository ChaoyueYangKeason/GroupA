import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductComponent = class ProductComponent {
    constructor(ProductService, avRoute) {
        this.ProductService = ProductService;
        this.avRoute = avRoute;
        const idParam = 'id';
        if (this.avRoute.snapshot.params[idParam]) {
            this.Id = this.avRoute.snapshot.params[idParam];
        }
    }
    ngOnInit() {
        this.loadProduct();
    }
    loadProduct() {
        this.Product$ = this.ProductService.getProduct(this.Id);
    }
};
ProductComponent = __decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.scss']
    })
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map