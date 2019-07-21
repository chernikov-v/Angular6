import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { copy, guid } from '../utils';
import { IndexedDB } from 'ng-indexed-db';
import { Observable } from 'rxjs';


let DB_KEY_PRODUCTS = 'products';

export enum TYPES {
  SMART = 'smart',
  WATCH = 'watch',
  TRACKER = 'tracker'
}

let PRODUCTS: IProduct[] = [{
  id: guid(),
  title: 'First Item',
  qty: 3,
  category: TYPES.SMART,
  price: 22,
  description: 'First Description',
  createdAt: new Date()
}, {
  id: guid(),
  title: 'Second Item',
  description: 'Second Description',
  createdAt: new Date()
}, {
  id: guid(),
  title: 'Third Item',
  description: 'Third Description',
  createdAt: new Date()
}];






@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private indexedDbService: IndexedDB) {
      
  }
  

  getProducts(): Observable<IProduct[]> {
      return this.indexedDbService.list(DB_KEY_PRODUCTS);
  }

  getProduct(_id: string): Observable<IProduct> {
    // let product = this.getProducts().filter(({ id }) => _id === id)[0];

    // return product
    return this.indexedDbService.get(DB_KEY_PRODUCTS, _id)
  }

  addProduct(product: IProduct): Observable<IProduct> {
    let new_product = Object.assign(copy(product), {
      id: guid(),
      createdAt: new Date,
    });
    return this.indexedDbService.create(DB_KEY_PRODUCTS, new_product);
  }

  removeProduct(product: IProduct) {
    /*  let id = product.id,
         i = PRODUCTS.findIndex(product); */
    // PRODUCTS.splice()

  }
}
