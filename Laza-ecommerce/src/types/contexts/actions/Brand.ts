import { IBrand } from 'types/models/Brands';

interface IPBrandPayload {
  brand: IBrand;
  brands: IBrand[];
}

export interface BrandsAction {
  payload: {
    data: IPBrandPayload;
    limit?: number;
    totalRowsOfBrands?: number;
  };
  type?: string;
  error?: string;
}
