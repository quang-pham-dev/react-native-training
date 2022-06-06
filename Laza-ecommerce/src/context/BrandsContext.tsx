import React, { createContext, useMemo, useReducer } from 'react';

// Context Reducer
import brandsReducer from './reducers/brands';

// Context initial state
import { InitialBrandsState } from './state/brands';

// Types
import { IProviderProps } from 'types/context/Providers';

export const BrandsContext = createContext({} as any);

const BrandsProvider = ({ children }: IProviderProps) => {
  const [brandState, brandDispatch] = useReducer<any>(brandsReducer, InitialBrandsState);

  const BrandsContextValue = useMemo(
    () => ({ brandState, brandDispatch }),
    [brandState, brandDispatch],
  );

  return (
    <BrandsContext.Provider value={{ ...BrandsContextValue }}>{children}</BrandsContext.Provider>
  );
};

export default BrandsProvider;
