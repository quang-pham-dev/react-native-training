import { IBrand } from 'types/models/Brands';

export interface BrandsState {
  isLoading: boolean;
  isProcessing: boolean;
  error: string | null;
  brands: IBrand[];
}

export const InitialBrandsState: BrandsState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  brands: [],
};
