import React, { createContext, useReducer } from 'react';
// Context Reducer
import { authReducer } from './Reducers/AuthReducer';
import { productReducer } from './Reducers/ProductReducer';
// Context initial state
import { AuthState, InitialAuthState } from './State/AuthState';
import { InitialProductState, ProductState } from './State/ProductState';

// export const combineReducers = (reducers: any) => {
//   return (state: any, action: any) => {
//     const temporaryState = { ...state };
//     Object.keys(reducers).forEach(key => {
//       temporaryState[key] = reducers[key](temporaryState[key], action);
//     });

//     return temporaryState;
//   };
// };

// interface StateApp {
//   auth: AuthState;
//   product: ProductState;
// }

// export const initialStateApp: StateApp = {
//   auth: InitialAuthState,
//   product: InitialProductState,
// };

export const AppContext = createContext<any>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  //   const rootReducer = combineReducers({
  //     auth: authReducer,
  //     products: productReducer,
  //   });

  const [authState, authDispatch] = useReducer(authReducer, InitialAuthState);
  const [productState, productDispatch] = useReducer(productReducer, InitialProductState);

  return (
    <AppContext.Provider value={{ authState, authDispatch, productState, productDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AuthProvider;
