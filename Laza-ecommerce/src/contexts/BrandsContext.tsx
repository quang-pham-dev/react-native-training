import React, { createContext, Dispatch, useContext, useMemo, useReducer } from 'react';

// Context Reducer
import brandsReducer, { InitialBrandsState } from './reducers/brands';

// Types
import { IProviderProps } from 'types/contexts/Providers';
import { BrandsState } from 'types/contexts/reducers/Brand';

export const BrandsContext = createContext<{
  brandState: BrandsState;
  brandDispatch: Dispatch<any>;
}>({
  brandState: InitialBrandsState,
  brandDispatch: () => null
});

export const BrandsContextProvider = ({ children }: IProviderProps) => {
  const [brandState, brandDispatch] = useReducer<any>(brandsReducer, InitialBrandsState);

  const BrandsContextValue = useMemo(() => ({ brandState, brandDispatch }), [brandState]);

  return (
    <BrandsContext.Provider value={BrandsContextValue as any}>{children}</BrandsContext.Provider>
  );
};

export const useBrandsContext = () => useContext(BrandsContext);
