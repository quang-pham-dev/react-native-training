import { ProductsState } from 'context/State/ProductsState';
import { ProductsAction } from 'types/Actions';

// handler for reducer
const handlers = {
  FETCH_PRODUCTS: (state: ProductsState, action: ProductsAction) => {
    return {
      ...state,
      products: action.payload,
    };
  },
};
export const productReducer = (state: ProductsState, action: ProductsAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;
