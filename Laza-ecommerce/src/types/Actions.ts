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

export const FETCHING = 'FETCHING';
export interface FetchingAction {
  type: typeof FETCHING;
  payload?: any;
}
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  payload?: any;
}

export type BrandAction = FetchingAction | FetchSuccessAction;
