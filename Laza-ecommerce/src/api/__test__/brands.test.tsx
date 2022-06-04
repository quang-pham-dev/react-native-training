import { jest } from '@jest/globals';

import { brandsService } from 'api/brands.api';

import http from 'api/http';
import { brand, brands } from '__mocks__/dataMock/brands';

jest.mock('api/http');

describe('Test brands api', () => {
  const mockedAxios = http as jest.Mocked<typeof http>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call function getBrands', async () => {
    jest.fn().mockRejectedValueOnce({ data: [brands] });
    await brandsService.getBrands();
  });
  test('should call function getBrandById', async () => {
    jest.fn().mockRejectedValueOnce({ data: [brand] });
    await brandsService.getBrandById(brand.id);
  });
});
