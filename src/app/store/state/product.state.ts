import { IProduct } from '../../models/product.interface';

export interface IProductState{
  products: IProduct[];
  selectedProduct: IProduct;
}

export const initialProductState: IProductState = {
  products: null,
  selectedProduct: null
}