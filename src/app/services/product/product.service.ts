import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.interface';

export enum TYPES {
    SMART = 'smart',
    WATCH = 'watch',
    TRACKER = 'tracker'
}

let PRODUCTS: IProduct[] = [{
    id: 1,
    title: 'First Item',
    qty: 3,
    category: TYPES.SMART,
    price: 22,
    description: 'First Description',
    createdAt: new Date()
}, {
    id: 2,
    title: 'Second Item',
    description: 'Second Description',
    createdAt: new Date()
}, {
    id: 3,
    title: 'Third Item',
    description: 'Third Description',
    createdAt: new Date()
}];
import { copy, guid } from '../utils';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() { }

    getProducts(): IProduct[] {
        return PRODUCTS;
    }

    getProduct(_id: number): IProduct {
        return this.getProducts().filter(({ id }) => _id === id)[0];
    }

    addProduct(product: IProduct): IProduct {

        PRODUCTS.push(
            Object.assign(copy(product), {
                id: guid(),
                createdAt: new Date,
            })
        );
        return product;
    }
}
