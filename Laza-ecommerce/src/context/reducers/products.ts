import {
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_BY_BRAND_ID,
  GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
  GET_PRODUCTS_BY_BRAND_ID_FAILED,
  RESET_STATE,
  ProductsAction,
} from 'context/actions/products';
import { InitialProductsState, ProductsState } from 'context/state/products';

const productsReducer = (state: ProductsState = InitialProductsState, action: ProductsAction) => {
  switch (action.type) {
    case GET_PRODUCTS:
    case GET_PRODUCT:
    case GET_PRODUCTS_BY_BRAND_ID:
      return {
        ...state,
        isProcessing: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        products: action.payload,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        productById: action.payload,
      };

    case GET_PRODUCTS_BY_BRAND_ID_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        productsByBrandId: action.payload,
      };

    case GET_PRODUCTS_FAILED:
    case GET_PRODUCT_FAILED:
    case GET_PRODUCTS_BY_BRAND_ID_FAILED:
      return {
        ...state,
        type: action.type,
        error: action.error,
      };

    case RESET_STATE:
      return {
        ...InitialProductsState,
      };

    default:
      /* If this reducer doesn't recognize the action type, or doesn't
     care about this specific action, return the existing state unchanged */
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default productsReducer;
