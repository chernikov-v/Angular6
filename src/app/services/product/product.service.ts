import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { IndexedDB } from 'ng-indexed-db';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { URLS } from '../interceptor/interceptor.service';
@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {

    }


    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(URLS.list)
    }

    getNewProduct(): Observable<IProduct> {
        return this.http.get<IProduct>(URLS.getNew);
    }

    getProduct(id: string): Observable<IProduct> {
        return this.http.post<IProduct>(URLS.get, id);
    }

    addProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(URLS.create, product);
    }

    updateProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(URLS.update, product);
    }

    removeProduct(product: IProduct) {
        return this.http.post(URLS.delete, product);
    }
}
