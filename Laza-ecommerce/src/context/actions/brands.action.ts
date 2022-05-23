import { Brand } from 'types/models/Brands';

export const GET_BRANDS = 'GET_BRANDS';
export const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS';
export const GET_BRANDS_FAILED = 'GET_BRANDS_FAILED';

export const GET_BRAND = 'GET_BRAND';
export const GET_BRAND_SUCCESS = 'GET_BRAND_SUCCESS';
export const GET_BRAND_FAILED = 'GET_BRAND_FAILED';

export const RESET_STATE = 'RESET_STATE';

export interface BrandsAction {
  payload?: Brand[];
  type: string;
  error?: string;
}
