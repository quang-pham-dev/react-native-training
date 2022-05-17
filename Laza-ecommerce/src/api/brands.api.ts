import http from './http';

const fetchBrands = () => {
  return http.get('brands');
};

const fetchBrandById = (id: string) => {
  return http.get(`brands?id=${id}`);
};
export const brandsService = {
  fetchBrands,
  fetchBrandById,
};
