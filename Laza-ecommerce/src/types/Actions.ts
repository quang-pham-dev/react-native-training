// Auth
export const INITIALIZE = 'INITIALIZE';
export interface InitialAction {
  type: typeof INITIALIZE;
  payload?: any;
}
export const SIGN_IN = 'SIGN_IN';
export interface SignInAction {
  type: typeof SIGN_IN;
  payload?: any;
}
export const SIGN_OUT = 'SIGN_OUT';
export interface SignOutAction {
  type: typeof SIGN_OUT;
  payload?: any;
}

export type AuthAction = InitialAction | SignInAction | SignOutAction;

//  Brands
export const FETCH_BRANDS = 'FETCH_BRANDS';
export interface FetchBrandsAction {
  type: typeof FETCH_BRANDS;
  payload?: any;
}

export type BrandsAction = FetchBrandsAction;

// Products
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  payload?: any;
}

export type ProductsAction = FetchProductsAction;
