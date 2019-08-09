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
    console.log(action.type);
  switch (action.type) {
    case ProductActionTypes.ErrorResponse:
        // debugger;
        return { ...state, loading: false };
    case ProductActionTypes.LoadList:
    case ProductActionTypes.Delete:
    case ProductActionTypes.Create:
    case ProductActionTypes.Update:
    case ProductActionTypes.Get:
    case ProductActionTypes.GetNew:
        return {...state, loading: true };
    
    case ProductActionTypes.CreateSuccess:
      return { ...state, loading: false, selected: null, products: [...state.products, action.payload] };
    case ProductActionTypes.UpdateSuccess:
      return {...state, loading: false, selected: null, products: state.products.map(product => product.id === (action.payload as IProduct).id ? action.payload : product) };
    case ProductActionTypes.DeleteSuccess:
      return  { ...state, loading: false, products: state.products.filter(product => product.id !== (action.payload as IProduct).id) };
    case ProductActionTypes.GetSuccess:
    case ProductActionTypes.GetNewSuccess:
      return  { ...state,  loading: false, selected: action.payload };
    case ProductActionTypes.LoadListSuccess:
      return  {...state, loading: false, products: action.payload };


    default: 
      return state;
    
  }
}