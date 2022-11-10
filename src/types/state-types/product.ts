import {IProduct} from '@model-types'
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
} from '@store'
import {IErrorItem} from './error'

export interface ProductsState {
  isLoading: boolean
  isProcessing: boolean
  error: string | null
  product: any
  products: IProduct[]
  productsByBrandId: IProduct[]
  totalRows: number
  totalRowsByBrandId: number
  limit: number
  searchValue: string
}

export interface IGetProduct {
  type: typeof GET_PRODUCT
  payload: {}
}

export interface IGetProductSuccess {
  type: typeof GET_PRODUCT_SUCCESS
  payload: {
    product: IProduct
  }
}

export interface IGetProductFailed {
  type: typeof GET_PRODUCT_FAILED
  payload: IErrorItem
}

export interface IGetProducts {
  type: typeof GET_PRODUCTS
  payload: {}
}

export interface IGetProductsSuccess {
  type: typeof GET_PRODUCTS_SUCCESS
  payload: {
    products: IProduct[]
    limit: number
    totalRows: number
  }
}

export interface IGetProductsFailed {
  type: typeof GET_PRODUCTS_FAILED
  payload: IErrorItem
}

export interface IGetProductsByBrandId {
  type: typeof GET_PRODUCTS_BY_BRAND_ID
  payload: {}
}

export interface IGetProductsByBrandIdSuccess {
  type: typeof GET_PRODUCTS_BY_BRAND_ID_SUCCESS
  payload: {
    productsByBrandId: IProduct[]
    limit: number
    totalRowsByBrandId: number
  }
}

export interface IGetProductsByBrandIdFailed {
  type: typeof GET_PRODUCTS_BY_BRAND_ID_FAILED
  payload: IErrorItem
}

export interface ILoadMoreProducts {
  type: typeof LOAD_MORE_PRODUCTS
  payload: {}
}

export interface ILoadMoreProductsSuccess {
  type: typeof LOAD_MORE_PRODUCTS_SUCCESS
  payload: {
    products: IProduct[]
    limit: number
  }
}

export interface ILoadMoreProductsFailed {
  type: typeof LOAD_MORE_PRODUCTS_FAILED
  payload: IErrorItem
}

export interface ILoadMoreProductsByBrandId {
  type: typeof LOAD_MORE_PRODUCTS_BY_BRAND_ID
  payload: {}
}

export interface ILoadMoreProductsByBrandIdSuccess {
  type: typeof LOAD_MORE_PRODUCTS_BY_BRAND_ID_SUCCESS
  payload: {
    productsByBrandId: IProduct[]
    limit: number
  }
}

export interface ILoadMoreProductsByBrandIdFailed {
  type: typeof LOAD_MORE_PRODUCTS_BY_BRAND_ID_FAILED
  payload: IErrorItem
}

export interface ISearchProductsValue {
  type: typeof SEARCH_PRODUCTS_VALUE
  payload: {
    searchValue: string
  }
}

export type ProductActions =
  | IGetProduct
  | IGetProductSuccess
  | IGetProductFailed
  | IGetProducts
  | IGetProductsSuccess
  | IGetProductsFailed
  | IGetProductsByBrandId
  | IGetProductsByBrandIdSuccess
  | IGetProductsByBrandIdFailed
  | ILoadMoreProducts
  | ILoadMoreProductsSuccess
  | ILoadMoreProductsFailed
  | ILoadMoreProductsByBrandId
  | ILoadMoreProductsByBrandIdSuccess
  | ILoadMoreProductsByBrandIdFailed
  | ISearchProductsValue
