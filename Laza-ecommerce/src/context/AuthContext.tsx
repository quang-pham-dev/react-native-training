import React, { createContext, useEffect, useState } from 'react';
// Services
import { authService } from 'api/auth.api';
// Types
import { User } from 'types/User';
import { AuthContextValue } from 'types/Auth';
// Utilities
import { get, remove, set } from 'utils/localStorage';
import { Alert } from 'react-native';

export const AuthContext = createContext<AuthContextValue>({
  currentUser: undefined,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  isLoading: false,
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('AuthProvider render');
  const [currentUser, setCurrentUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // load data from localStorage
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const data = await get('data');
      if (data) {
        //If there are data, it's converted to an Object and the state is updated.
        const { user } = JSON.parse(data);
        setCurrentUser(user);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  // handle sign in
  async function signIn(email: string, password: string): Promise<void> {
    try {
      const response = await authService.signIn(email, password);
      const { user } = response.data;
      // set the current user
      if (response.data.user) {
        setCurrentUser(user);
      }
      // set the current user and access_token in Async Storage
      set('data', JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  }
  // handle sign out
  async function signOut() {
    await authService.signOut();
    // set the current user to
    setCurrentUser(undefined);
    // remove the (current user & token) from Async Storage
    remove('data');
  }

  // provider value
  const value = {
    currentUser,
    isLoading,
    signIn,
    signOut,
    isAuthenticated: Boolean(currentUser),
  };

  return (
    <AuthContext.Provider
      value={{
        ...value,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
