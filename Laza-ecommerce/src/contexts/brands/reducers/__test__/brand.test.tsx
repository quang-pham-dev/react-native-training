import React from 'react';

// Reducer
import brandsReducer from 'contexts/brands/reducers/brands';

// State
import { InitialBrandsState } from 'contexts/brands/reducers/brands';

// Actions
import {
  GET_BRAND,
  GET_BRANDS,
  LOAD_MORE_BRANDS,
  GET_BRAND_SUCCESS,
  GET_BRANDS_SUCCESS,
  LOAD_MORE_BRANDS_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRANDS_FAILED,
  LOAD_MORE_BRANDS_FAILED,
  RESET_STATE
} from 'contexts/brands/actions/brands';

// Constants
import { BRAND_PAGINATION } from 'constants/Brands';

// Mocks
import { brand, brands } from '__mocks__/dataMock/brands';

describe('brandsReducer', () => {
  const BrandsPayload = {
    brand: brand,
    brands: brands
  };

  const BrandsResponse = {
    payload: {
      data: BrandsPayload,
      limit: BRAND_PAGINATION.BRAND_LIMIT,
      totalRowsOfBrands: 0
    },
    error: undefined
  };

  test('should handle GET_BRAND', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRAND,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      isProcessing: true
    });
  });
  test('should handle GET_BRANDS', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRANDS,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      isProcessing: true
    });
  });

  test('should handle LOAD_MORE_BRANDS', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: LOAD_MORE_BRANDS,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      isLoading: true
    });
  });

  test('should handle GET_BRAND_SUCCESS', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRAND_SUCCESS,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      type: GET_BRAND_SUCCESS,
      isProcessing: false,
      brand: BrandsResponse.payload?.data?.brand
    });
  });
  test('should handle GET_BRANDS_SUCCESS', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRANDS_SUCCESS,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      type: GET_BRANDS_SUCCESS,
      isProcessing: false,
      brands: BrandsPayload.brands
    });
  });

  test('should handle LOAD_MORE_BRANDS_SUCCESS', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: LOAD_MORE_BRANDS_SUCCESS,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      type: LOAD_MORE_BRANDS_SUCCESS,
      isLoading: false,
      brands: BrandsPayload.brands
    });
  });

  test('should handle GET_BRAND_FAILED', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRAND_FAILED,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      type: GET_BRAND_FAILED,
      isProcessing: false,
      error: undefined
    });
  });
  test('should handle GET_BRANDS_FAILED', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: GET_BRANDS_FAILED,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      type: GET_BRANDS_FAILED,
      isProcessing: false,
      error: undefined
    });
  });

  test('should handle LOAD_MORE_BRANDS_FAILED', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: LOAD_MORE_BRANDS_FAILED,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState,
      type: LOAD_MORE_BRANDS_FAILED,
      isLoading: false,
      isProcessing: false,
      error: BrandsResponse.error
    });
  });

  test('should handle RESET_STATE', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        type: RESET_STATE,
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState
    });
  });

  test('should handle default', () => {
    return expect(
      brandsReducer(InitialBrandsState, {
        payload: BrandsResponse.payload
      })
    ).toEqual({
      ...InitialBrandsState
    });
  });
});
