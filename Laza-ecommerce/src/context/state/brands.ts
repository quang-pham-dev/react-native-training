// Constants
import { BRAND_PAGINATION } from 'constants/Brands';

// Types
import { IBrand } from 'types/models/Brands';

export interface BrandsState {
  isLoading: boolean;
  isProcessing: boolean;
  error: string | null;
  brands: IBrand[];
  totalRowsOfBrands: number;
  limit: number;
}

export const InitialBrandsState: BrandsState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  brands: [],
  totalRowsOfBrands: 0,
  limit: BRAND_PAGINATION.BRAND_LIMIT,
};
