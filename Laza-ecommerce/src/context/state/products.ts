// Types
import { IProduct } from 'types/models/Products';

// Constants
import { PRODUCT_PAGINATION } from 'constants/Products';

export interface ProductsState {
  isLoading: boolean;
  isProcessing: boolean;
  error: string | null;
  products: IProduct[];
  productsByBrandId: IProduct[];
  totalRows: number;
  totalRowsByBrandId: number;
  limit: number;
  searchValue: string;
}

export const InitialProductsState: ProductsState = {
  isLoading: false,
  isProcessing: true,
  error: null,
  products: [],
  productsByBrandId: [],
  totalRows: 0,
  totalRowsByBrandId: 0,
  searchValue: '',
  limit: PRODUCT_PAGINATION.PRODUCT_LIMIT,
};
