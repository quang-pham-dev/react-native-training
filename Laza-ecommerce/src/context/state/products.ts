// Types
import { IProduct } from 'types/models/Products';

// Constants
import { PAGINATION } from 'constants/Products';

export interface ProductsState {
  isLoading: boolean;
  isProcessing: boolean;
  error: string | null;
  products: IProduct[];
  productsByBrandId: IProduct[];
  totalRows: number;
  limit: number;
  searchValue: string;
  getProducts(): Promise<void>;
  getProduct(id: string): Promise<void>;
  getProductsByBrandId(id: string): Promise<void>;
}

export const InitialProductsState: ProductsState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  products: [],
  productsByBrandId: [],
  totalRows: 0,
  searchValue: '',
  limit: PAGINATION.LIMIT,
  getProducts: () => Promise.resolve(),
  getProduct: (id: string) => Promise.resolve(),
  getProductsByBrandId: (id: string) => Promise.resolve(),
};
