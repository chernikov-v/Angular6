import { IProduct } from "src/app/models/product.interface";
import { ProductActionTypes, ProductActions } from "../actions/product.actions";

export interface State {
  products: IProduct[],
  selected: IProduct,
  loading: boolean
};

const initialState: State = {
  products: [],
  selected: null,
  loading: false
};

export function productReducer(state = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.CreateSuccess:
      return Object.assign({}, state, { products: [...state.products, action.payload] });

    case ProductActionTypes.UpdateSuccess:
      return Object.assign({}, state, { products: state.products.map(product => product.id === (action.payload as IProduct).id ? action.payload : product) });

    case ProductActionTypes.DeleteSuccess:
      return Object.assign({}, state, { products: state.products.filter(product => product.id === (action.payload as IProduct).id) });
    case ProductActionTypes.SelectSuccess:
      return Object.assign({}, state, { selected: action.payload });
    case ProductActionTypes.LoadList:
      return Object.assign({}, state, { loading: true });
    case ProductActionTypes.LoadListSuccess:
      return Object.assign({}, state, { products: action.payload, loading: false });


    default: {
      return state;
    }
  }
}