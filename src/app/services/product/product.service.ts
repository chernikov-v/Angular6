import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product.interface';

let PRODUCTS = [{
  id: 1,
  name: 'First Item',
  description: 'First Description'
}, {
  id: 2,
  name: 'Second Item',
  description: 'Second Description'
}, {
  id: 3,
  name: 'Third Item',
  description: 'Third Description'
}];

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

}
