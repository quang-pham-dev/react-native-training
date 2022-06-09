import { jest } from '@jest/globals';

// API
import { productsService } from 'api/products';

// Constants
import { PRODUCT_PAGINATION } from 'constants/Products';

// Mock
import { product, products } from '__mocks__/dataMock/products';

describe('Test brands api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call function getProductById', async () => {
    jest.fn().mockRejectedValueOnce({ data: [product] });
    await productsService.getProductById(product.id);
  });
  test('should call function getProducts', async () => {
    jest.fn().mockRejectedValueOnce({ data: [products] });
    await productsService.getProducts(PRODUCT_PAGINATION.PRODUCT_LIMIT);
  });
  test('should call function getBrandById', async () => {
    jest.fn().mockRejectedValueOnce({ data: [products] });
    await productsService.getProductsByBrandId(product.brandId, PRODUCT_PAGINATION.PRODUCT_LIMIT);
  });
});
