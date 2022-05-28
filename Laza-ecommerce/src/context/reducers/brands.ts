import {
  BrandsAction,
  GET_BRAND,
  GET_BRANDS,
  GET_BRANDS_FAILED,
  GET_BRANDS_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_SUCCESS,
  RESET_STATE,
} from 'context/actions/brands';
import { BrandsState, InitialBrandsState } from 'context/state/brands';

const brandsReducer = (state: BrandsState = InitialBrandsState, action: BrandsAction) => {
  switch (action.type) {
    case GET_BRANDS:
    case GET_BRAND:
      return {
        ...state,
        isProcessing: true,
      };

    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        brands: action.payload?.brands,
      };

    case GET_BRAND_SUCCESS:
      return {
        ...state,
        type: action.type,
        isProcessing: false,
        brand: action.payload?.brand,
      };

    case GET_BRANDS_FAILED:
    case GET_BRAND_FAILED:
      return {
        ...state,
        isProcessing: false,
        type: action.type,
        error: action.error,
      };

    case RESET_STATE:
      return {
        ...InitialBrandsState,
      };

    default:
      /* If this reducer doesn't recognize the action type, or doesn't
     care about this specific action, return the existing state unchanged */
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default brandsReducer;
