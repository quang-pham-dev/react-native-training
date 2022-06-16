import { IBrand } from 'types/models/Brands';

export interface BrandsState {
  isLoading: boolean;
  isProcessing: boolean;
  error: string | null;
  brands: IBrand[];
  totalRowsOfBrands: number;
  limit: number;
}
