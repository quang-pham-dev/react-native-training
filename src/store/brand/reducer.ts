import {
  GET_BRANDS,
  GET_BRANDS_FAILED,
  GET_BRANDS_SUCCESS,
  LOAD_MORE_BRANDS,
  LOAD_MORE_BRANDS_SUCCESS,
  LOAD_MORE_BRANDS_FAILED,
} from '@store'

// Constants
import {BRAND_PAGINATION} from '@constants'

// Types
import {BrandActions, BrandState} from '@state-types/brand'

export const InitialBrandState: BrandState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  brands: [],
  totalRowsOfBrands: 0,
  limit: BRAND_PAGINATION.BRAND_LIMIT,
}

export const brandReducer = (
  state: BrandState = InitialBrandState,
  action: BrandActions,
): BrandState => {
  switch (action.type) {
    case GET_BRANDS:
      return {
        ...state,
        isProcessing: true,
      }

    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        brands: action.payload?.brands,
        limit: action.payload?.limit,
        totalRowsOfBrands: action.payload?.totalRowsOfBrands,
      }

    case LOAD_MORE_BRANDS:
      return {
        ...state,
        isLoading: true,
      }

    case LOAD_MORE_BRANDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        brands: action.payload?.brands,
        limit: action.payload?.limit,
      }

    case GET_BRANDS_FAILED:
    case LOAD_MORE_BRANDS_FAILED:
      return {
        ...state,
        isProcessing: false,
        error: action.payload?.error,
      }

    default:
      return {
        ...state,
      }
  }
}
