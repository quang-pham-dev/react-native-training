import { IBrand } from 'types/models/Brands';

interface IPBrandPayload {
  brand: IBrand;
  brands: IBrand[];
}

export interface BrandsAction {
  payload?: IPBrandPayload;
  type: string;
  error?: string;
}
