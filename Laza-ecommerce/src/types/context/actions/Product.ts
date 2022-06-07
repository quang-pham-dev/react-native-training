import { IProduct } from 'types/models/Products';

interface IProductPayload {
  product: IProduct;
  products: IProduct[];
  productsByBrandId: IProduct[];
  productsSearch: IProduct[];
}
export interface ProductsAction {
  payload: {
    data: IProductPayload;
    limit?: number;
    totalRows?: number;
    totalRowsByBrandId?: number;
    page?: number;
  };
  searchValue?: string;
  type?: string;
  error?: string;
}
