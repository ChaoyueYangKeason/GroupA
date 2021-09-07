import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ProductAddEditComponent = class ProductAddEditComponent {
    constructor(ProductService, formBuilder, avRoute, router) {
        this.ProductService = ProductService;
        this.formBuilder = formBuilder;
        this.avRoute = avRoute;
        this.router = router;
        const idParam = 'id';
        this.actionType = 'Add';
        this.formTitle = 'title';
        this.formBody = 'body';
        if (this.avRoute.snapshot.params[idParam]) {
            this.Id = this.avRoute.snapshot.params[idParam];
        }
        this.form = this.formBuilder.group({
            Id: 0,
            title: ['', [Validators.required]],
            body: ['', [Validators.required]],
        });
    }
    ngOnInit() {
        if (this.Id > 0) {
            this.actionType = 'Edit';
            this.ProductService.getProduct(this.Id)
                .subscribe(data => (this.existingProduct = data,
                this.form.controls[this.formTitle].setValue(data.Name),
                this.form.controls[this.formBody].setValue(data.Quantity)));
        }
    }
    save() {
        if (!this.form.valid) {
            return;
        }
        if (this.actionType === 'Add') {
            let Product = {
                Name: this.form.get(this.formTitle).value,
                Quantity: this.form.get(this.formBody).value,
                Language: 'English',
                Category: 'New'
            };
            this.ProductService.saveProduct(Product)
                .subscribe((data) => {
                this.router.navigate(['/Product', data.Id]);
            });
        }
        if (this.actionType === 'Edit') {
            let Product = {
                Id: this.existingProduct.Id,
                Name: this.form.get(this.formTitle).value,
                Quantity: this.form.get(this.formBody).value,
                Language: this.existingProduct.Language,
                Category: "New"
            };
            this.ProductService.updateProduct(Product.Id, Product)
                .subscribe((data) => {
                this.router.navigate([this.router.url]);
            });
        }
    }
    cancel() {
        this.router.navigate(['/']);
    }
    get title() { return this.form.get(this.formTitle); }
    get body() { return this.form.get(this.formBody); }
};
ProductAddEditComponent = __decorate([
    Component({
        selector: 'app-product-add-edit',
        templateUrl: './product-add-edit.component.html',
        styleUrls: ['./product-add-edit.component.scss']
    })
], ProductAddEditComponent);
export { ProductAddEditComponent };
//# sourceMappingURL=product-add-edit.component.js.map