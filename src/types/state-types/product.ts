import {IProduct} from '@model-types'

export interface ProductsState {
  isLoading: boolean
  isProcessing: boolean
  error: string | null
  products: IProduct[]
  productsByBrandId: IProduct[]
  totalRows: number
  totalRowsByBrandId: number
  limit: number
  searchValue: string
}

interface ProductPayload {
  product: IProduct
  products: IProduct[]
  productsByBrandId: IProduct[]
  productsSearch: IProduct[]
}
export interface ProductsAction {
  payload: {
    data: ProductPayload
    limit?: number
    totalRows?: number
    totalRowsByBrandId?: number
    page?: number
  }
  searchValue?: string
  type?: string
  error?: string
}
