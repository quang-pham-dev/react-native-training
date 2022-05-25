import { Brand } from 'types/models/Brands';

export interface BrandsState {
  isLoading: boolean;
  isProcessing: boolean;
  error: string | null;
  brands: Brand[];
  getBrands(): Promise<void>;
  getBrand(id: string): Promise<void>;
}

export const InitialBrandsState: BrandsState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  brands: [],
  getBrands: () => Promise.resolve(),
  getBrand: () => Promise.resolve(),
};