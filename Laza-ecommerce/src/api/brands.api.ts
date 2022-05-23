// API
import http from 'api/http';

// Constants
import { ENDPOINTS } from 'constants/Common';

// get all brands
const fetchBrands = async () => {
  return await http.get(ENDPOINTS.BRAND.GET_BRANDS);
};

// get brand by id
const fetchBrandById = async (id: string) => {
  return await http.get(`${ENDPOINTS.BRAND.GET_BRANDS}?id=${id}`);
};
export const brandsService = {
  fetchBrands,
  fetchBrandById,
};
