import { BrandProps } from 'types/Brands';

export interface BrandsState {
  brands: BrandProps[];
  isLoading: boolean;
  error: string | null;
  FetchAll(): Promise<void>;
  FetchById(id: string): Promise<void>;
}

export const InitialBrandsState: BrandsState = {
  error: null,
  isLoading: false,
  FetchAll: () => Promise.resolve(),
  FetchById: () => Promise.resolve(),
  brands: [],
};
