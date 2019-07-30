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

export function productReducer(state = initialState, action: ProductActions ): State {
    let data = action.payload;
    switch (action.type) {
        case ProductActionTypes.CreateSuccess:
            return Object.assign({}, state, { products: [ ...state.products, action.payload]});

        case ProductActionTypes.UpdateSuccess: 
        return Object.assign({}, state, { products: state.products.map(product => product.id === (data as IProduct).id ? data : product)});

        case ProductActionTypes.DeleteSuccess:
        return Object.assign({}, state, { products: state.products.filter( product =>  product.id === (data as IProduct).id) });
               
        case ProductActionTypes.SelectSuccess:
            return Object.assign({}, state, { selected: action.payload });
        

        default: {
            return state;
        }
    }
}