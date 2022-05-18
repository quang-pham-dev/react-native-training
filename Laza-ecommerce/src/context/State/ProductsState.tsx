import { ProductProps } from 'types/Products';

export interface ProductsState {
  products: ProductProps[];
  isLoading: boolean;
  error: string | null;
  FetchAllProducts(): Promise<void>;
  FetchProductById(id: string): Promise<void>;
  FetchProductByBrandId(id: string): Promise<void>;
}

export const InitialProductsState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
  FetchAllProducts: () => Promise.resolve(),
  FetchProductById: () => Promise.resolve(),
  FetchProductByBrandId: () => Promise.resolve(),
};
