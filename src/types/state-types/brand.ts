import {IBrand} from '@model-types'
import {
  GET_BRANDS,
  GET_BRANDS_FAILED,
  GET_BRANDS_SUCCESS,
  LOAD_MORE_BRANDS,
  LOAD_MORE_BRANDS_FAILED,
  LOAD_MORE_BRANDS_SUCCESS,
} from '@store'
import {IErrorItem} from './error'

export interface BrandState {
  isLoading: boolean
  isProcessing: boolean
  error: string | null
  brands?: IBrand[]
  totalRowsOfBrands: number
  limit: number
}

export interface IGetBrands {
  type: typeof GET_BRANDS
  payload: {}
}

export interface IGetBrandsSuccess {
  type: typeof GET_BRANDS_SUCCESS
  payload: {brands: IBrand[]; limit: number; totalRowsOfBrands: number}
}

export interface IGetBrandsFailed {
  type: typeof GET_BRANDS_FAILED
  payload: IErrorItem
}

export interface ILoadMoreBrands {
  type: typeof LOAD_MORE_BRANDS
  payload: {}
}

export interface ILoadMoreBrandsSuccess {
  type: typeof LOAD_MORE_BRANDS_SUCCESS
  payload: {
    brands: IBrand[]
    limit: number
  }
}

export interface ILoadMoreBrandsFailed {
  type: typeof LOAD_MORE_BRANDS_FAILED
  payload: IErrorItem
}

export type BrandActions =
  | IGetBrands
  | IGetBrandsSuccess
  | IGetBrandsFailed
  | ILoadMoreBrands
  | ILoadMoreBrandsSuccess
  | ILoadMoreBrandsFailed
