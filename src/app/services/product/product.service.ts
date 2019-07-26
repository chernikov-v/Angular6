import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { IndexedDB } from 'ng-indexed-db';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, mapTo } from 'rxjs/operators';

import { URLS } from '../interceptor/interceptor.service';

let DB_KEY_PRODUCTS = 'products';

export enum TYPES {
    SMART = 'smart',
    WATCH = 'watch',
    TRACKER = 'tracker'
}



@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private indexedDbService: IndexedDB, private http: HttpClient) {

    }


    getProducts(): Observable<IProduct[]> {
    // getProducts(): Observable<Object> {
        return this.http.get<IProduct[]>(URLS.list)/* .pipe(
            map((data) => {
                debugger;
                return data;
            })
        ); */
        
        //   return this.indexedDbService.list(DB_KEY_PRODUCTS);
    }

    getNewProduct(): Observable<IProduct>{
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
