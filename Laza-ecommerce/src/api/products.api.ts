// API
import http from 'api/http';

// Constants
import { ENDPOINTS } from 'constants/Common';

// get all products
const getProducts = async () => {
  return await http.get(ENDPOINTS.PRODUCT.GET_PRODUCTS);
};

// get product by id
const getProductById = async (id: string) => {
  return await http.get(`${ENDPOINTS.PRODUCT.GET_PRODUCTS}?id=${id}`);
};

// get product by brand id
const getProductByBrandId = async (id: string) => {
  return await http.get(`${ENDPOINTS.PRODUCT.GET_PRODUCTS}?brandId=${id}`);
};

export const productsService = {
  getProducts,
  getProductById,
  getProductByBrandId,
};
