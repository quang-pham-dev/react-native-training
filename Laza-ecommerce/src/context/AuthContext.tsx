import React, { createContext, useEffect, useMemo, useReducer } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// API
import { authService } from 'api';
// Constants
import { AuthData } from 'constants/Common';
// Context Reducer
import { authReducer } from './Reducers/AuthReducer';
// Context initial state
import { AuthState, InitialAuthState } from './State/AuthState';
// Types
import { INITIALIZE, SIGN_IN, SIGN_OUT } from 'types/Actions';

export const AuthenticationContext = createContext<AuthState>(InitialAuthState);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, InitialAuthState);

  useEffect(() => {
    loadStorageData();
  }, []);

  // load data from local Storage device.
  const loadStorageData = async () => {
    try {
      const authData = await AsyncStorage.getItem(AuthData);
      if (authData) {
        const { user } = JSON.parse(authData);
        const { access_token } = JSON.parse(authData);
        dispatch({
          type: INITIALIZE,
          payload: { user, access_token },
        });
      }
    } catch (error) {
      Alert.alert('Error', '' + error.message);
    }
  };

  const authContextValue = useMemo(
    () => ({
      signIn: async (username: string, password: string) => {
        try {
          const response = await authService.signIn(username, password);
          const { user } = response.data;
          const { access_token } = response.data;
          if (user && access_token) {
            dispatch({
              type: SIGN_IN,
              payload: { user, access_token },
            });
          }
          // set the current user and access_token in Local Storage
          AsyncStorage.setItem(AuthData, JSON.stringify(response.data));
          AsyncStorage.setItem('access_token', JSON.stringify(access_token));
        } catch (errors) {
          Alert.alert('Error', errors.response.data.message);
        }
      },

      signOut: async () => {
        try {
          authService.signOut();
          dispatch({ type: SIGN_OUT });
          // remove the (current user & token) from Local Storage
          AsyncStorage.removeItem(AuthData);
        } catch (errors) {
          AsyncStorage.removeItem(AuthData);
          Alert.alert('Error', errors.response.data.message);
        }
      },
    }),
    [],
  );

  // provider value
  const value = {
    ...state,
    ...authContextValue,
  };

  return (
    <AuthenticationContext.Provider
      value={{
        ...value,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthProvider;
