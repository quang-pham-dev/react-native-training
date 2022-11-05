import {IBrand} from '@model-types'

export interface BrandState {
  isLoading: boolean
  isProcessing: boolean
  error: string | null
  brands: IBrand[]
  totalRowsOfBrands: number
  limit: number
}

interface BrandPayload {
  brand: IBrand
  brands: IBrand[]
}

export interface BrandAction {
  payload: {
    data: BrandPayload
    limit?: number
    totalRowsOfBrands?: number
  }
  type?: string
  error?: string
}
