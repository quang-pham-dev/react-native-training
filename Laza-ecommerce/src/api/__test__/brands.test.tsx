import { jest } from '@jest/globals';

// API
import { brandsService } from 'api/brands';

// Constants
import { BRAND_PAGINATION } from 'constants/Brands';

// Mocks
import { brand, brands } from '__mocks__/dataMock/brands';

describe('Test brands api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call function getBrands', async () => {
    jest.fn().mockRejectedValueOnce({ data: [brands] });
    await brandsService.getBrands(BRAND_PAGINATION.BRAND_LIMIT);
  });
  test('should call function getBrandById', async () => {
    jest.fn().mockRejectedValueOnce({ data: [brand] });
    await brandsService.getBrandById(brand.id);
  });
});
