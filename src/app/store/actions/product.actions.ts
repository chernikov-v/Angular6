/* import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';


export enum ProductActionTypes {
    Create = '[Product] Creade',
    Update = '[Product] Update',
    Delete = '[Product] Delete'
    // Verb2 = '[Product] Verb2'

    
}

export const ACreate = createAction(
    ProductActionTypes.Create,
    props<IProduct>()
);

export const AUpdate = createAction(
    ProductActionTypes.Update,
    props<IProduct>()
);

export const ADelete = createAction(
    ProductActionTypes.Delete,
    props<IProduct>()
);

export type ProductActions = ACreate | AUpdate | ADelete; */

import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';


export enum ProductActionTypes {
    Create = '[Product] Create',
    CreateSuccess = '[Product] CreateSuccess',
    Update = '[Product] Update',
    UpdateSuccess = '[Product] UpdateSuccess',
    Delete = '[Product] Delete',
    DeleteSuccess = '[Product] DeleteSuccess',
    Select = '[Product] Select',
    SelectSuccess = '[Product] SelectSuccess'
};


export class Create implements Action {
    readonly type = ProductActionTypes.Create;

    constructor(public payload: IProduct) { }
}
export class CreateSuccess implements Action {
    readonly type = ProductActionTypes.CreateSuccess;

    constructor(public payload: IProduct[]) { }
}

export class Update implements Action {
    readonly type = ProductActionTypes.Update;

    constructor(public payload: IProduct) { }
}
export class UpdateSuccess implements Action {
    readonly type = ProductActionTypes.UpdateSuccess;

    constructor(public payload: IProduct[]) { }
}

export class Delete implements Action {
    readonly type = ProductActionTypes.Delete;

    constructor(public payload: IProduct) { }
}
export class DeleteSuccess implements Action {
    readonly type = ProductActionTypes.DeleteSuccess;

    constructor(public payload: IProduct[]) { }
}
export class Select implements Action {
    readonly type = ProductActionTypes.Select;

    constructor(public payload: string) { }
}
export class SelectSuccess implements Action {
    readonly type = ProductActionTypes.SelectSuccess;

    constructor(public payload: IProduct) { }
}




export type ProductActions
                        = Create
                        | CreateSuccess
                        | Update 
                        | UpdateSuccess 
                        | Delete
                        | DeleteSuccess
                        | Select
                        | SelectSuccess;
