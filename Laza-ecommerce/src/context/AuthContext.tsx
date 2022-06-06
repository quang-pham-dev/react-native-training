import React, { createContext, useMemo, useReducer } from 'react';

// Context Reducer
import authenticationReducer from './reducers/auth';

// Context initial state
import { InitialAuthState } from 'context/state/auth';

// Types
import { IProviderProps } from 'types/context/Providers';

export const AuthenticationContext = createContext({} as any);

const AuthenticationProvider = ({ children }: IProviderProps) => {
  const [authState, authDispatch] = useReducer<any>(authenticationReducer, InitialAuthState);

  const AuthContextValue = useMemo(() => ({ authState, authDispatch }), [authState, authDispatch]);

  return (
    <AuthenticationContext.Provider value={{ ...AuthContextValue }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
