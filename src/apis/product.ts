// Config
import {http} from '@configs'

// Constants
import {ENDPOINTS, PRODUCT_PAGINATION} from '@constants'

// Types
import {IProduct} from '@model-types'

export interface ProductResponse {
  data: {
    data: IProduct[]
    pagination: {
      _page?: number
      _totalRows?: number
      _limit: number
    }
  }
}

// get all products
const getProducts = async (limit: number): Promise<ProductResponse> => {
  return await http.get(
    `${ENDPOINTS.PRODUCT.GET_PRODUCTS}?_page=${PRODUCT_PAGINATION.PAGE}&_limit=${limit}`,
  )
}

// get product by id
const getProductById = async (id: string): Promise<ProductResponse> => {
  return await http.get(`${ENDPOINTS.PRODUCT.GET_PRODUCTS}?id=${id}`)
}

// get product by brand id
const getProductsByBrandId = async (
  id: string,
  limit: number,
): Promise<ProductResponse> => {
  return await http.get(
    `${ENDPOINTS.PRODUCT.GET_PRODUCTS}?brandId=${id}&_page=${PRODUCT_PAGINATION.PAGE}&_limit=${limit}`,
  )
}

export const productsService = {
  getProducts,
  getProductById,
  getProductsByBrandId,
}
