import React, { createContext, Dispatch, useContext, useMemo, useReducer } from 'react';

// Context Reducer
import productsReducer, { InitialProductsState } from './reducers/products';

// Types
import { IProviderProps } from 'types/contexts/Providers';

export const ProductsContext = createContext<{
  productState: any;
  productDispatch: Dispatch<any>;
}>({
  productState: InitialProductsState,
  productDispatch: () => null
});

export const ProductContextProvider = ({ children }: IProviderProps) => {
  const [productState, productDispatch] = useReducer<any>(productsReducer, InitialProductsState);

  const ProductsContextValue = useMemo(() => ({ productState, productDispatch }), [productState]);

  return (
    <ProductsContext.Provider value={ProductsContextValue as any}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductsContext);
