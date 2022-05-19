import React, { createContext, useMemo, useReducer } from 'react';
// Context Reducer
import { authReducer } from './Reducers/AuthReducer';
import { brandsReducer } from './Reducers/BrandsReducer';
import { productReducer } from './Reducers/ProductsReducer';
// Context initial state
import { InitialAuthState } from './State/AuthState';
import { InitialBrandsState } from './State/BrandsState';
import { InitialProductsState } from './State/ProductsState';

export const AppContext = createContext<any>([{}, () => {}]);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, authDispatch] = useReducer(authReducer, InitialAuthState);
  const [productState, productDispatch] = useReducer(productReducer, InitialProductsState);
  const [brandState, brandDispatch] = useReducer(brandsReducer, InitialBrandsState);

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
