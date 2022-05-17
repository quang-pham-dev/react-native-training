import React, { createContext, useReducer } from 'react';
// Context Reducer
import { authReducer } from './Reducers/AuthReducer';
// Context initial state
import { InitialAuthState } from './State/AuthState';

export const AppContext = createContext<any>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [authState, authDispatch] = useReducer(authReducer, InitialAuthState);

  return <AppContext.Provider value={{ authState, authDispatch }}>{children}</AppContext.Provider>;
};

export default AuthProvider;
