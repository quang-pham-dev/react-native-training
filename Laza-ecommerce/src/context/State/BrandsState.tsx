import { BrandProps } from 'types/Brands';

export interface BrandsState {
  brands: BrandProps[];
  isLoading: boolean;
  error: string | null;
  FetchAllBrands(): Promise<void>;
  FetchBrandById(id: string): Promise<void>;
}

export const InitialBrandsState: BrandsState = {
  brands: [],
  isLoading: false,
  error: null,
  FetchAllBrands: () => Promise.resolve(),
  FetchBrandById: () => Promise.resolve(),
};
