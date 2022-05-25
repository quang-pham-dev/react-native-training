import React, { createContext, useMemo, useReducer } from 'react';

// Context Reducer
import authenticationReducer from './reducers/auth';
import productsReducer from './reducers/products';
import brandsReducer from './reducers/brands';

// Context initial state
import { InitialBrandsState } from 'context/state/brands';
import { InitialProductsState } from 'context/state/products';
import { InitialAuthState } from 'context/state/auth';

interface IAppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext({} as any);

const AppProvider = ({ children }: IAppProviderProps) => {
  const [authState, authDispatch] = useReducer<any>(authenticationReducer, InitialAuthState);
  const [productState, productDispatch] = useReducer<any>(productsReducer, InitialProductsState);
  const [brandState, brandDispatch] = useReducer<any>(brandsReducer, InitialBrandsState);

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
