import React, { createContext, useMemo, useReducer } from 'react';

// Context Reducer
import brandsReducer from './reducers/brands.reducer';

// Context initial state
import { InitialBrandsState } from './state/brands.state';

export const BrandsContext = createContext({} as any);

const BrandsProvider = ({ children }: { children: React.ReactNode }) => {
  const [brandState, brandDispatch] = useReducer<any>(brandsReducer, InitialBrandsState);

  const brandsContextValue = useMemo(
    () => ({
      brandState,
      brandDispatch,
    }),
    [brandState, brandDispatch],
  );

  return (
    <BrandsContext.Provider value={{ ...brandsContextValue }}>{children}</BrandsContext.Provider>
  );
};

export default BrandsProvider;
