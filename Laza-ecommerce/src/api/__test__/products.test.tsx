import { jest } from '@jest/globals';

import { productsService } from 'api/products.api';

import http from 'api/http';
import { product, products } from '__mocks__/dataMock/products';
import { PAGINATION } from 'constants/Products';

jest.mock('api/http');

describe('Test brands api', () => {
  const mockedAxios = http as jest.Mocked<typeof http>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call function getProductById', async () => {
    jest.fn().mockRejectedValueOnce({ data: [product] });
    await productsService.getProductById(product.id);
  });
  test('should call function getProducts', async () => {
    jest.fn().mockRejectedValueOnce({ data: [products] });
    await productsService.getProducts(PAGINATION.LIMIT);
  });
  test('should call function getBrandById', async () => {
    jest.fn().mockRejectedValueOnce({ data: [products] });
    await productsService.getProductsByBrandId(product.brandId, PAGINATION.LIMIT);
  });
  test('should call function loadMoreProducts', async () => {
    jest.fn().mockRejectedValueOnce({ data: [products] });
    await productsService.loadMoreProducts(PAGINATION.LIMIT);
  });
  test('should call function searchProductsByName', async () => {
    jest.fn().mockRejectedValueOnce({ data: [products] });
    await productsService.searchProductsByName(PAGINATION.LIMIT, product.name);
  });
});
