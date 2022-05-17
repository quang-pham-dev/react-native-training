import { BrandsState } from 'context/State/BrandsState';
import { BrandsAction } from 'types/Actions';

// handler for reducer
const handlers = {
  FETCH_BRANDS: (state: BrandsState, action: BrandsAction) => {
    return {
      ...state,
      brands: action.payload,
    };
  },
};
export const brandsReducer = (state: BrandsState, action: BrandsAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;
