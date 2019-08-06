import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay, map, mapTo } from 'rxjs/operators';
import { IndexedDB } from 'ng-indexed-db';
import { IProduct } from '../../models/product.interface';
import { copy, guid } from '../utils';



let DB_KEY_PRODUCTS = 'products';

const DEFAULT_PRODUCT = {
    id: null,
    image: null,
    title: null,
    description: null,
    category: null,
    createdAt: null,
    qty: 1
}

export enum URLS {
    list = '/api/products/list',
    getNew = '/api/products/new',
    get = '/api/products/get',
    update = '/api/products/update',
    delete = '/api/products/delete',
    create = '/api/products/create'
};

export enum METHODS {
    get = 'GET',
    post = 'POST',
    delete = 'DELETE'
}


@Injectable({
    providedIn: 'root'
})
export class BackendInterceptor implements HttpInterceptor {

    constructor(private indexedDbService: IndexedDB) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return of(null)
            .pipe(mergeMap(() => {
                let { url, method, body } = request;
                switch (true) {
                    case url.endsWith(URLS.list) && method === METHODS.get: 
                    
                      // return of(new HttpResponse({ status: 404, body: { Error: 'Unknown method!' } }))
                      // return throwError({error: "text"});
                        return this.indexedDbService.list(DB_KEY_PRODUCTS)
                            .pipe(
                                map((body: IProduct[]) => new HttpResponse({ status: 200, body: body }))
                            )

                    case url.endsWith(URLS.getNew) && method === METHODS.get: 
                        return of(new HttpResponse({ status: 200, body: DEFAULT_PRODUCT }));
                    
                    case url.endsWith(URLS.create) && method === METHODS.post: {
                        let new_product = Object.assign(copy(body), {
                            id: guid(),
                            createdAt: new Date,
                        });
                        return this.indexedDbService.create(DB_KEY_PRODUCTS, new_product).pipe(
                            map(() => new HttpResponse({ status: 200, body: new_product }))
                        );
                    }

                    case url.endsWith(URLS.get) && method === METHODS.post: 
                        return this.indexedDbService.get(DB_KEY_PRODUCTS, body).pipe(
                            map(response => new HttpResponse({ status: 200, body: response }))
                        );

                    case url.endsWith(URLS.update) && method === METHODS.post:
                        if (body.id) {
                            return this.indexedDbService.update(DB_KEY_PRODUCTS, body).pipe(
                                map(response => new HttpResponse({ status: 200, body: response }))
                            );
                        } else {
                            return of(new HttpErrorResponse({ status: 500, error: 'Unknown instance' }))
                        }
                    
                    case url.endsWith(URLS.delete) && method === METHODS.post:
                        return this.indexedDbService.delete(DB_KEY_PRODUCTS, body.id).pipe(
                            map(response => new HttpResponse({ status: 200, body: body }))
                        );

                    default:
                        return of(new HttpResponse({ status: 404, body: { Error: 'Unknown method!' } }));
                }

                // return next.handle(request);

            }),
                materialize(),
                delay(1000),
                dematerialize()
            );

        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    }
}

export let BackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
};