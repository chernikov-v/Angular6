import { Action } from '@ngrx/store';
import { IProduct } from '../../models/product.interface';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum GetProductActionTypes {
  GetProducts = '[GetProduct] Get Products',
  GetProductsSuccess = '[GetProduct] Get Products Success',
  GetProduct = '[GetProduct] Get Product',
  GetProductSuccess = '[GetProduct] Get Product Success'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class GetProducts implements Action {
  readonly type = GetProductActionTypes.GetProducts;
  constructor(public payload: number) { }

}
export class GetProductsSuccess implements Action {
  readonly type = GetProductActionTypes.GetProductsSuccess;

  constructor(public payload: IProduct[]) { }
}


export class GetProduct implements Action {
  readonly type = GetProductActionTypes.GetProduct;
  constructor(public payload: number) { }

}
export class GetProductSuccess implements Action {
  readonly type = GetProductActionTypes.GetProductSuccess;

  constructor(public payload: IProduct) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ProductActions = GetProducts | GetProductsSuccess | GetProduct | GetProductSuccess;
