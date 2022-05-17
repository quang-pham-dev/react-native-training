import { ProductProps } from 'types/Products';

export interface ProductsState {
  products: ProductProps[];
  isLoading: boolean;
  error: string | null;
  FetchAll(): Promise<void>;
  FetchById(id: string): Promise<void>;
}

export const InitialProductsState: ProductsState = {
  error: null,
  isLoading: false,
  FetchAll: () => Promise.resolve(),
  FetchById: () => Promise.resolve(),
  products: [],
};
