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
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_FAILED,
  LOAD_MORE_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
  LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
  SEARCH_PRODUCTS_VALUE,
} from './action'

// Constants
import {PRODUCT_PAGINATION} from '@constants'

// Types
import {ProductActions, ProductsState} from '@state-types/product'

export const InitialProductState: ProductsState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  products: [],
  productsByBrandId: [],
  totalRows: 0,
  totalRowsByBrandId: 0,
  searchValue: '',
  limit: PRODUCT_PAGINATION.PRODUCT_LIMIT,
  product: {},
}

export const productsReducer = (
  state: ProductsState = InitialProductState,
  action: ProductActions,
): ProductsState => {
  switch (action.type) {
    case GET_PRODUCTS:
    case GET_PRODUCT:
    case GET_PRODUCTS_BY_BRAND_ID:
      return {
        ...state,
        isProcessing: true,
      }
    case LOAD_MORE_PRODUCTS:
    case LOAD_MORE_PRODUCTS_BY_BRAND_ID:
      return {
        ...state,
        isLoading: true,
      }

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        product: action.payload?.product,
      }

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        products: action.payload?.products,
        limit: action.payload?.limit,
        totalRows: action.payload?.totalRows,
      }

    case GET_PRODUCTS_BY_BRAND_ID_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        productsByBrandId: action.payload?.productsByBrandId,
        limit: action.payload?.limit,
        totalRowsByBrandId: action.payload?.totalRowsByBrandId,
      }

    case LOAD_MORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload?.products,
        limit: action.payload?.limit,
      }

    case LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsByBrandId: action.payload?.productsByBrandId,
        limit: action.payload?.limit,
      }

    case SEARCH_PRODUCTS_VALUE:
      return {
        ...state,
        searchValue: action.payload?.searchValue,
      }

    case GET_PRODUCTS_FAILED:
    case GET_PRODUCT_FAILED:
    case GET_PRODUCTS_BY_BRAND_ID_FAILED:
    case LOAD_MORE_PRODUCTS_FAILED:
    case LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED:
      return {
        ...state,
        isProcessing: false,
        isLoading: false,
        error: action.payload.error,
      }

    default:
      return {
        ...state,
      }
  }
}
