import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay, map } from 'rxjs/operators';
import { IndexedDB } from 'ng-indexed-db';
import { IProduct } from '../../models/product.interface';


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
    delete = '/api/products/delete'
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
        debugger;

        return of(null)
            .pipe(mergeMap(() => {
                let { url, method } = request;
                switch (true) {
                    case url.endsWith(URLS.list) && method === METHODS.get: {

                        return this.indexedDbService.list(DB_KEY_PRODUCTS).pipe(
                            map( ( body : IProduct[] ) => new HttpResponse({ status: 200, body: body }))
                        );

                    }
                        break;
                    case url.endsWith(URLS.getNew) && method === METHODS.get: {



                    }
                        break;
                    case url.endsWith(URLS.get) && method === METHODS.get: {

                        // return _id ? this.indexedDbService.get(DB_KEY_PRODUCTS, _id) : new Observable( subscriber => subscriber.next(DEFAULT_PRODUCT));

                    }
                        break;
                    case url.endsWith(URLS.update) && method === METHODS.post: {



                    }
                        break;
                    case url.endsWith(URLS.delete) && method === METHODS.post: {



                    }
                        break;

                    default:
                        // return Observable.throw('Unknown method!');
                        return of(new HttpResponse({ status: 404, body: { Error: 'Unknown method!' } }));
                }

                return next.handle(request);

            }),
                materialize(),
                delay(500),
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