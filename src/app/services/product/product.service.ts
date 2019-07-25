import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { copy, guid } from '../utils';
import { IndexedDB } from 'ng-indexed-db';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, mapTo } from 'rxjs/operators';

import { URLS } from '../interceptor/interceptor.service';

let DB_KEY_PRODUCTS = 'products';

export enum TYPES {
    SMART = 'smart',
    WATCH = 'watch',
    TRACKER = 'tracker'
}

const DEFAULT_PRODUCT = {
    id: null,
    image: null,
    title: null,
    description: null,
    category: null,
    createdAt: null,
    qty: 1
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private indexedDbService: IndexedDB, private http: HttpClient) {

    }


    getProducts(): Observable<IProduct[]> {
        return this.http.get(URLS.list).pipe(
            map( data => {
                // debugger;
                return data;
            })
        );
        //   return this.indexedDbService.list(DB_KEY_PRODUCTS);
    }

    getProduct(_id: string): Observable<IProduct> {
        return _id ? this.indexedDbService.get(DB_KEY_PRODUCTS, _id) : new Observable(subscriber => subscriber.next(DEFAULT_PRODUCT));
    }

    addProduct(product: IProduct): Observable<IProduct> {
        let new_product = Object.assign(copy(product), {
            id: guid(),
            createdAt: new Date,
        });
        return this.indexedDbService.create(DB_KEY_PRODUCTS, new_product);
    }

    updateProduct(product: IProduct): Observable<IProduct> {
        if (product.id) return this.indexedDbService.update(DB_KEY_PRODUCTS, product);
        return this.addProduct(product);
    }

    removeProduct(product: IProduct) {
        return this.indexedDbService.delete(DB_KEY_PRODUCTS, product.id);
    }
}
