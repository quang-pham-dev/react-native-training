import React from 'react';

// Reducer
import productsReducer from 'context/reducers/products';

// State
import { InitialProductsState } from 'context/state/products';

// Actions
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
  SEARCH_PRODUCTS_VALUE,
} from 'context/actions/products';

// Mocks
import { product, products } from '__mocks__/dataMock/products';

// Constants
import { PRODUCT_PAGINATION } from 'constants/Products';

describe('productsReducer', () => {
  const ProductPayload = {
    product: product,
    products: products,
    productsByBrandId: products,
    productsSearch: products,
  };

  const ProductsResponse = {
    payload: {
      data: ProductPayload,
      limit: PRODUCT_PAGINATION.PRODUCT_LIMIT,
      totalRows: 0,
      totalRowsByBrandId: 0,
    },
    searchValue: undefined,
    error: undefined,
  };

  test('should handle GET_PRODUCT', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCT,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      isProcessing: true,
    });
  });
  test('should handle GET_PRODUCTS', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCTS,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      isProcessing: true,
    });
  });
  test('should handle GET_PRODUCTS_BY_BRAND_ID', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCTS_BY_BRAND_ID,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      isProcessing: true,
    });
  });
  test('should handle LOAD_MORE_PRODUCTS', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: LOAD_MORE_PRODUCTS,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      isLoading: true,
    });
  });

  test('should handle LOAD_MORE_PRODUCTS_BY_BRAND_ID', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      isLoading: true,
    });
  });
  test('should handle SEARCH_PRODUCTS_VALUE', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: SEARCH_PRODUCTS_VALUE,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      searchValue: ProductsResponse.searchValue,
    });
  });

  test('should handle GET_PRODUCT_SUCCESS', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCT_SUCCESS,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: GET_PRODUCT_SUCCESS,
      isProcessing: false,
      product: ProductPayload.product,
    });
  });

  test('should handle GET_PRODUCTS_SUCCESS', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCTS_SUCCESS,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: GET_PRODUCTS_SUCCESS,
      isProcessing: false,
      products: ProductPayload.products,
    });
  });

  test('should handle GET_PRODUCTS_BY_BRAND_ID_SUCCESS', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: GET_PRODUCTS_BY_BRAND_ID_SUCCESS,
      isProcessing: false,
      productsByBrandId: ProductPayload.productsByBrandId,
    });
  });

  test('should handle LOAD_MORE_PRODUCTS_SUCCESS', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: LOAD_MORE_PRODUCTS_SUCCESS,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: LOAD_MORE_PRODUCTS_SUCCESS,
      isLoading: false,
      products: ProductPayload.products,
    });
  });

  test('should handle LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS,
      isLoading: false,
      productsByBrandId: ProductPayload.productsByBrandId,
    });
  });

  test('should handle GET_PRODUCT_FAILED', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCT_FAILED,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: GET_PRODUCT_FAILED,
      isProcessing: false,
      error: ProductsResponse.error,
    });
  });

  test('should handle GET_PRODUCTS_FAILED', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCTS_FAILED,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: GET_PRODUCTS_FAILED,
      isProcessing: false,
      error: ProductsResponse.error,
    });
  });

  test('should handle GET_PRODUCTS_BY_BRAND_ID_FAILED', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: GET_PRODUCTS_BY_BRAND_ID_FAILED,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: GET_PRODUCTS_BY_BRAND_ID_FAILED,
      isProcessing: false,
      error: ProductsResponse.error,
    });
  });

  test('should handle LOAD_MORE_PRODUCTS_FAILED', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: LOAD_MORE_PRODUCTS_FAILED,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: LOAD_MORE_PRODUCTS_FAILED,
      isLoading: false,
      isProcessing: false,
      error: ProductsResponse.error,
    });
  });

  test('should handle LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      type: LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED,
      isLoading: false,
      isProcessing: false,
      error: ProductsResponse.error,
    });
  });

  test('should handle RESET_STATE', () => {
    return expect(
      productsReducer(InitialProductsState, {
        type: RESET_STATE,
        payload: ProductsResponse.payload,
      }),
    ).toEqual({
      ...InitialProductsState,
      isProcessing: true,
      error: null,
    });
  });
});
