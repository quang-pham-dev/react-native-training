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

// Products
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export interface FetchProductAction {
  type: typeof FETCH_PRODUCT;
  payload?: any;
}

export type ProductAction = FetchProductAction;
