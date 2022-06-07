// API
import http from 'api/http';

// Constants
import { ENDPOINTS } from 'constants/Common';
import { PRODUCT_PAGINATION } from 'constants/Products';

// Types
import { IProductResponse } from 'types/models/Products';

// get all products
const getProducts = async (limit: number): Promise<IProductResponse> => {
  return await http.get(
    `${ENDPOINTS.PRODUCT.GET_PRODUCTS}?_page=${PRODUCT_PAGINATION.PAGE}&_limit=${limit}`,
  );
};

// get product by id
const getProductById = async (id: string) => {
  return await http.get(`${ENDPOINTS.PRODUCT.GET_PRODUCTS}?id=${id}`);
};

// get product by brand id
const getProductsByBrandId = async (id: string, limit: number) => {
  return await http.get(
    `${ENDPOINTS.PRODUCT.GET_PRODUCTS}?brandId=${id}&_page=${PRODUCT_PAGINATION.PAGE}&_limit=${limit}`,
  );
};

// get products by limit
const loadMoreProducts = async (limit: number) => {
  return await http.get(
    `${ENDPOINTS.PRODUCT.GET_PRODUCTS}?_page=${PRODUCT_PAGINATION.PAGE}&_limit=${limit}`,
  );
};
// search products by limit
const searchProductsByName = async (limit: number, searchValue: string) => {
  return await http.get(
    `${ENDPOINTS.PRODUCT.GET_PRODUCTS}?name_like=${searchValue}&_page=${PRODUCT_PAGINATION.PAGE}&_limit=${limit}`,
  );
};

export const productsService = {
  getProducts,
  getProductById,
  getProductsByBrandId,
  loadMoreProducts,
  searchProductsByName,
};
