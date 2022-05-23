import React, { createContext, useMemo, useReducer } from 'react';

// Context Reducer
import productsReducer from './reducers/products.reducer';

// Context initial state
import { InitialProductsState } from 'context/state/products.state';

export const ProductsContext = createContext({} as any);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [productState, productDispatch] = useReducer<any>(productsReducer, InitialProductsState);

  const productContextValue = useMemo(
    () => ({
      productState,
      productDispatch,
    }),
    [productState, productDispatch],
  );

  return (
    <ProductsContext.Provider value={{ ...productContextValue }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
