import {
  GET_BRAND,
  GET_BRANDS,
  GET_BRANDS_FAILED,
  GET_BRANDS_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_SUCCESS,
  LOAD_MORE_BRANDS,
  LOAD_MORE_BRANDS_SUCCESS,
  LOAD_MORE_BRANDS_FAILED,
} from '@contexts/brand/action/brand'

// Constants
import {BRAND_PAGINATION} from '@constants'

// Types
import {BrandAction, BrandState} from '@state-types'

export const InitialBrandState: BrandState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  brands: [],
  totalRowsOfBrands: 0,
  limit: BRAND_PAGINATION.BRAND_LIMIT,
}

const brandReducer = (state: typeof InitialBrandState, action: BrandAction) => {
  switch (action.type) {
    case GET_BRANDS:
    case GET_BRAND:
      return {
        ...state,
        isProcessing: true,
      }

    case LOAD_MORE_BRANDS:
      return {
        ...state,
        isLoading: true,
      }

    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        brands: action.payload?.data?.brands,
        limit: action.payload?.limit,
        totalRowsOfBrands: action.payload?.totalRowsOfBrands,
      }

    case GET_BRAND_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        brand: action.payload?.data?.brand,
      }

    case LOAD_MORE_BRANDS_SUCCESS:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        brands: action.payload?.data?.brands,
        limit: action.payload?.limit,
      }

    case GET_BRANDS_FAILED:
    case GET_BRAND_FAILED:
    case LOAD_MORE_BRANDS_FAILED:
      return {
        ...state,
        isProcessing: false,
        type: action.type,
        error: action.error,
      }

    default:
      return {
        ...state,
      }
  }
}

export default brandReducer
