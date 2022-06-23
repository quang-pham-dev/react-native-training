import React, { createContext, Dispatch, useContext, useMemo, useReducer } from 'react';

// Context Reducer
import authenticationReducer, { InitialAuthState } from './reducers/auth';

// Types
import { IProviderProps } from 'types/contexts/Providers';
import { AuthState } from 'types/contexts/reducers/Auth';

export const AuthContext = createContext<{
  authState: AuthState;
  authDispatch: Dispatch<any>;
}>({
  authState: InitialAuthState,
  authDispatch: () => null
});

export const AuthContextProvider = ({ children }: IProviderProps) => {
  const [authState, authDispatch] = useReducer<any>(authenticationReducer, InitialAuthState);

  const AuthContextValue = useMemo(() => ({ authState, authDispatch }), [authState]);

  return <AuthContext.Provider value={AuthContextValue as any}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
