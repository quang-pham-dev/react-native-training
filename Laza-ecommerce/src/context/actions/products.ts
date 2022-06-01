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

export const LOAD_MORE_PRODUCTS = 'LOAD_MORE_PRODUCTS';
export const LOAD_MORE_PRODUCTS_SUCCESS = 'LOAD_MORE_PRODUCTS_SUCCESS';
export const LOAD_MORE_PRODUCTS_FAILED = 'LOAD_MORE_PRODUCTS_FAILED';

export const LOAD_MORE_PRODUCTS_BY_BRAND_ID = 'LOAD_MORE_PRODUCTS_BY_BRAND_ID';
export const LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS = 'LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS';
export const LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED = 'LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED';

export const SEARCH_PRODUCTS_VALUE = 'SEARCH_PRODUCTS_VALUE';

export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAILED = 'SEARCH_PRODUCTS_FAILED';

export const RESET_STATE = 'RESET_STATE';

interface IProductPayload {
  product: IProduct;
  products: IProduct[];
  productsByBrandId: IProduct[];
  productsSearch: IProduct[];
}
export interface ProductsAction {
  payload: {
    data: IProductPayload;
    limit?: number;
    totalRows?: number;
    totalRowsByBrandId?: number;
    page?: number;
  };
  searchValue?: string;
  type: string;
  error?: string;
}
