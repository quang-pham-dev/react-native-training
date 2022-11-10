// Config
import {http} from '@configs'

// Constants
import {BRAND_PAGINATION, ENDPOINTS} from '@constants'

// Types
import {IBrand} from '@model-types'

export interface BrandResponse {
  data: {
    data?: IBrand[]
    pagination: {
      _page?: number
      _totalRows?: number
      _limit: number
    }
  }
}

// get all brands
const getBrands = async (limit: number): Promise<BrandResponse> => {
  return await http.get(
    `${ENDPOINTS.BRAND.GET_BRANDS}?_page=${BRAND_PAGINATION.PAGE}&_limit=${limit}`,
  )
}

// get brand by id
const getBrandById = async (id: string): Promise<IBrand> => {
  return await http.get(`${ENDPOINTS.BRAND.GET_BRANDS}?id=${id}`)
}
export const brandService = {
  getBrands,
  getBrandById,
}
