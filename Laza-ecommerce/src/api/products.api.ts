import http from './http';

const fetchProducts = async () => {
  return await http.get('newArraivalProducts');
};

const fetchProductById = (id: string) => {
  return http.get(`newArraivalProducts?id=${id}`);
};
const fetchProductByBrandId = (id: string) => {
  return http.get(`newArraivalProducts?brandId=${id}`);
};

export const productsService = {
  fetchProducts,
  fetchProductById,
  fetchProductByBrandId,
};
