import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.interface';


export enum ProductActionTypes {
    Create = '[Product] Create',
    CreateSuccess = '[Product] CreateSuccess',
    Update = '[Product] Update',
    UpdateSuccess = '[Product] UpdateSuccess',
    Delete = '[Product] Delete',
    DeleteSuccess = '[Product] DeleteSuccess',
    Get = '[Product] Get',
    GetSuccess = '[Product] GetSuccess',
    GetNew = '[Product] GetNew',
    GetNewSuccess = '[Product] GetNewSuccess',
    LoadList = '[Product] LoadList',
    LoadListSuccess = '[Product] LoadListSuccess',
    ErrorResponse = "[Product] ErrorResponse"
};


export class ErrorResponse implements Action {
  readonly type = ProductActionTypes.ErrorResponse;

  constructor(public payload?: string) { }
}

export class Create implements Action {
    readonly type = ProductActionTypes.Create;

    constructor(public payload: IProduct) { }
}
export class CreateSuccess implements Action {
    readonly type = ProductActionTypes.CreateSuccess;

    constructor(public payload: IProduct) { }
}

export class Update implements Action {
    readonly type = ProductActionTypes.Update;

    constructor(public payload: IProduct) { }
}
export class UpdateSuccess implements Action {
    readonly type = ProductActionTypes.UpdateSuccess;

    constructor(public payload: IProduct) { }
}

export class Delete implements Action {
    readonly type = ProductActionTypes.Delete;

    constructor(public payload: IProduct) { }
}
export class DeleteSuccess implements Action {
    readonly type = ProductActionTypes.DeleteSuccess;

    constructor(public payload: IProduct) { }
}

export class Get implements Action {
  readonly type = ProductActionTypes.Get;

  constructor(public payload: string) { }
}
export class GetSuccess implements Action {
  readonly type = ProductActionTypes.GetSuccess;

  constructor(public payload: IProduct) { }
}

export class GetNew implements Action {
  readonly type = ProductActionTypes.GetNew;

  constructor() { }
}
export class GetNewSuccess implements Action {
  readonly type = ProductActionTypes.GetNewSuccess;

  constructor(public payload: IProduct) { }
}

export class LoadList implements Action {
    readonly type = ProductActionTypes.LoadList;

    constructor() { }
}
export class LoadListSuccess implements Action {
    readonly type = ProductActionTypes.LoadListSuccess;

    constructor(public payload: IProduct[]) { }
}




export type ProductActions
                        = Create
                        | CreateSuccess
                        | Update 
                        | UpdateSuccess 
                        | Delete
                        | DeleteSuccess
                        | Get
                        | GetSuccess
                        | GetNew
                        | GetNewSuccess
                        | LoadList
                        | LoadListSuccess
                        | ErrorResponse;
