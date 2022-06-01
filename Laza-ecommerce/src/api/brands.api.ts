// API
import http from 'api/http';

// Constants
import { ENDPOINTS } from 'constants/Common';

// get all brands
const getBrands = async () => {
  return await http.get(ENDPOINTS.BRAND.GET_BRANDS);
};

// get brand by id
const getBrandById = async (id: string) => {
  return await http.get(`${ENDPOINTS.BRAND.GET_BRANDS}?id=${id}`);
};
export const brandsService = {
  getBrands,
  getBrandById,
};
