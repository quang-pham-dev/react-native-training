import { Product } from 'types/models/Products';

export interface ProductsState {
  isLoading: boolean;
  isProcessing: boolean;
  error: string | null;
  products: Product[];
  getProducts(): Promise<void>;
  getProduct(id: string): Promise<void>;
  getProductsByBrandId(id: string): Promise<void>;
}

export const InitialProductsState: ProductsState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  products: [],
  getProducts: () => Promise.resolve(),
  getProduct: () => Promise.resolve(),
  getProductsByBrandId: () => Promise.resolve(),
};
