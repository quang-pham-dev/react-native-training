// API
import http from 'api/http';

// Constants
import { ENDPOINTS } from 'constants/Common';
import { PRODUCT_PAGINATION } from 'constants/Products';

// Types
import { IBrand, IBrandsResponse } from 'types/models/Brands';

// get all brands
const getBrands = async (limit: number): Promise<IBrandsResponse> => {
  return await http.get(
    `${ENDPOINTS.BRAND.GET_BRANDS}?_page=${PRODUCT_PAGINATION.PAGE}&_limit=${limit}`,
  );
};

// get brand by id
const getBrandById = async (id: string): Promise<IBrand> => {
  return await http.get(`${ENDPOINTS.BRAND.GET_BRANDS}?id=${id}`);
};
export const brandsService = {
  getBrands,
  getBrandById,
};
