import { IProduct } from 'types/models/Products';

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
