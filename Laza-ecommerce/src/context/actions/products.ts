import { IProduct } from 'types/models/Products';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILED = 'GET_PRODUCT_FAILED';

export const GET_PRODUCTS_BY_BRAND_ID = 'GET_PRODUCTS_BY_BRAND_ID';
export const GET_PRODUCTS_BY_BRAND_ID_SUCCESS = 'GET_PRODUCTS_BY_BRAND_ID_SUCCESS';
export const GET_PRODUCTS_BY_BRAND_ID_FAILED = 'GET_PRODUCTS_BY_BRAND_ID_FAILED';

export const RESET_STATE = 'RESET_STATE';

export interface ProductsAction {
  payload?: IProduct[];
  type: string;
  error?: string;
}
