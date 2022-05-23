import React, { createContext, useMemo, useReducer } from 'react';

// Context Reducer
import authenticationReducer from './reducers/auth.reducer';
import productsReducer from './reducers/products.reducer';
import brandsReducer from './reducers/brands.reducer';

// Context initial state
import { InitialBrandsState } from 'context/state/brands.state';
import { InitialProductsState } from 'context/state/products.state';
import { InitialAuthState } from 'context/state/auth.state';

interface IAppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext({} as any);

const AppProvider = ({ children }: IAppProviderProps) => {
  const [authState, authDispatch] = useReducer<any>(authenticationReducer, InitialAuthState);
  const [productState, productDispatch] = useReducer<any>(productsReducer, InitialProductsState);
  const [brandState, brandDispatch] = useReducer<any>(brandsReducer, InitialBrandsState);

  console.log('AppProvider:>> ', authState);

  const appContextValue = useMemo(
    () => ({
      authState,
      productState,
      brandState,
      authDispatch,
      productDispatch,
      brandDispatch,
    }),
    [authState, productState, brandState, authDispatch, productDispatch, brandDispatch],
  );

  return <AppContext.Provider value={{ ...appContextValue }}>{children}</AppContext.Provider>;
};

export default AppProvider;
