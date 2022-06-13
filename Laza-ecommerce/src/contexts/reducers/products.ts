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
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_FAILED,
  LOAD_MORE_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
  SEARCH_PRODUCTS_VALUE
} from 'contexts/actions/products';

// Constants
import { PRODUCT_PAGINATION } from 'constants/Products';

// Types
import { ProductsAction } from 'types/context/actions/Product';
import { ProductsState } from 'types/context/reducers/Product';

export const InitialProductsState: ProductsState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  products: [],
  productsByBrandId: [],
  totalRows: 0,
  totalRowsByBrandId: 0,
  searchValue: '',
  limit: PRODUCT_PAGINATION.PRODUCT_LIMIT
};

const productsReducer = (state: typeof InitialProductsState, action: ProductsAction) => {
  switch (action.type) {
    case GET_PRODUCTS:
    case GET_PRODUCT:
    case GET_PRODUCTS_BY_BRAND_ID:
      return {
        ...state,
        isProcessing: true
      };
    case LOAD_MORE_PRODUCTS:
    case LOAD_MORE_PRODUCTS_BY_BRAND_ID:
      return {
        ...state,
        isLoading: true
      };

    case SEARCH_PRODUCTS_VALUE:
      return {
        ...state,
        searchValue: action.searchValue
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        products: action.payload?.data?.products,
        limit: action.payload?.limit,
        totalRows: action.payload?.totalRows
      };

    case GET_PRODUCT_SUCCESS:
      const { product } = action.payload?.data;
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        product
      };

    case GET_PRODUCTS_BY_BRAND_ID_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        productsByBrandId: action.payload?.data?.productsByBrandId,
        limit: action.payload?.limit,
        totalRowsByBrandId: action.payload?.totalRowsByBrandId
      };

    case LOAD_MORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        products: action.payload?.data?.products,
        limit: action.payload?.limit
      };

    case LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        productsByBrandId: action.payload?.data?.productsByBrandId,
        limit: action.payload?.limit
      };

    case GET_PRODUCTS_FAILED:
    case GET_PRODUCT_FAILED:
    case GET_PRODUCTS_BY_BRAND_ID_FAILED:
    case LOAD_MORE_PRODUCTS_FAILED:
    case LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED:
      return {
        ...state,
        isProcessing: false,
        isLoading: false,
        type: action.type,
        error: action.error
      };

    case RESET_STATE:
      return {
        ...InitialProductsState
      };

    default:
      return {
        ...state
      };
  }
};

export default productsReducer;
