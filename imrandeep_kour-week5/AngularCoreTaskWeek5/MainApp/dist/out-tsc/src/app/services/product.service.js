import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.myAppUrl = environment.appUrl;
        this.myApiUrl = 'api/Products/';
    }
    getProducts() {
        return this.http.get(this.myAppUrl + this.myApiUrl)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    getProduct(Id) {
        return this.http.get(this.myAppUrl + this.myApiUrl + Id)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    saveProduct(Product) {
        return this.http.post(this.myAppUrl + this.myApiUrl, JSON.stringify(Product), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    updateProduct(Id, Product) {
        return this.http.put(this.myAppUrl + this.myApiUrl + Id, JSON.stringify(Product), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    deleteProduct(Id) {
        return this.http.delete(this.myAppUrl + this.myApiUrl + Id)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map