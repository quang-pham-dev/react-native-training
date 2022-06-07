import React, { createContext, useMemo, useReducer } from 'react';

// Context Reducer
import productsReducer, { InitialProductsState } from './reducers/products';

// Types
import { IProviderProps } from 'types/context/Providers';

export const ProductsContext = createContext({} as any);

const ProductsProvider = ({ children }: IProviderProps) => {
  const [productState, productDispatch] = useReducer<any>(productsReducer, InitialProductsState);

  const ProductsContextValue = useMemo(
    () => ({ productState, productDispatch }),
    [productState, productDispatch],
  );

  return (
    <ProductsContext.Provider value={{ ...ProductsContextValue }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
