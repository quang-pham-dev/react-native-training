import http from './http';

const fetchProducts = async () => {
  return await http.get('newArraivalProducts');
};

const fetchProductById = (id: string) => {
  return http.get(`newArraivalProducts?id=${id}`);
};
export const productsService = {
  fetchProducts,
  fetchProductById,
};
