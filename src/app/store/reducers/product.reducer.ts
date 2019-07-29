import { IProduct } from "src/app/models/product.interface";
import { ProductActionTypes, ProductActions } from "../actions/product.actions";

export interface State {
         products: IProduct[],
         selected: IProduct,
};

const initialState: State = {
        products: null,
        selected: null,
};

export function reducer(state = initialState, action: ProductActions ): State {
    switch (action.type) {
        case ProductActionTypes.CreateSuccess: 
        case ProductActionTypes.UpdateSuccess: 
        case ProductActionTypes.DeleteSuccess:
            return {
                ...state,
                products: action.payload,
                // selected: null
            };

        case ProductActionTypes.SelectSuccess:
            return {
                ...state,
                selected: action.payload
            }
        

        default: {
            return state;
        }
    }
}