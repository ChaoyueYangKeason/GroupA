import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductsComponent = class ProductsComponent {
    constructor(Productservice) {
        this.Productservice = Productservice;
    }
    ngOnInit() {
        this.loadProducts();
    }
    loadProducts() {
        this.Products$ = this.Productservice.getProducts();
    }
    delete(Id) {
        const ans = confirm('Do you want to delete blog post with id: ' + Id);
        if (ans) {
            this.Productservice.deleteProduct(Id).subscribe((data) => {
                this.loadProducts();
            });
        }
    }
};
ProductsComponent = __decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.scss']
    })
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map