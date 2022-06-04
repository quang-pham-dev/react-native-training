import React from 'react';

// Reducer
import brandsReducer from 'context/reducers/brands';

// State
import { BrandsState, InitialBrandsState } from 'context/state/brands';

// Actions
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

// Mocks
import { brand, brands } from '__mocks__/dataMock/brands';

describe('brandsReducer', () => {
  const BrandsResponse = {
    brand: brand,
    brands: brands,
  };

  test('should handle GET_BRAND', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRAND,
        payload: BrandsResponse,
      }),
    ).toEqual({
      ...InitialBrandsState,
      isProcessing: true,
    });
  });
  test('should handle GET_BRANDS', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRANDS,
        payload: BrandsResponse,
      }),
    ).toEqual({
      ...InitialBrandsState,
      isProcessing: true,
    });
  });

  test('should handle GET_BRAND_SUCCESS', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRAND_SUCCESS,
        payload: BrandsResponse,
      }),
    ).toEqual({
      ...InitialBrandsState,
      type: GET_BRAND_SUCCESS,
      isProcessing: false,
      brand: BrandsResponse.brand,
    });
  });
  test('should handle GET_BRANDS_SUCCESS', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRANDS_SUCCESS,
        payload: BrandsResponse,
      }),
    ).toEqual({
      ...InitialBrandsState,
      type: GET_BRANDS_SUCCESS,
      isProcessing: false,
      brands: BrandsResponse.brands,
    });
  });

  test('should handle GET_BRAND_FAILED', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRAND_FAILED,
        payload: BrandsResponse,
      }),
    ).toEqual({
      ...InitialBrandsState,
      type: GET_BRAND_FAILED,
      isProcessing: false,
      error: undefined,
    });
  });
  test('should handle GET_BRANDS_FAILED', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRANDS_FAILED,
        payload: BrandsResponse,
      }),
    ).toEqual({
      ...InitialBrandsState,
      type: GET_BRANDS_FAILED,
      isProcessing: false,
      error: undefined,
    });
  });

  test('should handle RESET_STATE', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: RESET_STATE,
      }),
    ).toEqual({
      ...InitialBrandsState,
    });
  });
});
