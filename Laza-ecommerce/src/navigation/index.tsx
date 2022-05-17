import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Navigator
import AppDrawerNavigator from './AppDrawerNavigator';
import AuthNavigator from './AuthStackNavigator';
// Context
import { AppContext } from 'context/AppContext';
// Types
import { INITIALIZE } from 'types/Actions';
// Constants
import { AUTH_DATA } from 'constants/Common';

const RootNavigator: React.FC = () => {
  // get status authenticated from context
  const { authState, authDispatch } = useContext(AppContext);
  // check if user is authenticated
  const getAuth = async () => {
    const authData = await AsyncStorage.getItem(AUTH_DATA);
    if (authData) {
      const { user } = JSON.parse(authData);
      const { access_token } = JSON.parse(authData);
      authDispatch({
        type: INITIALIZE,
        payload: { user, access_token },
      });
    }
  };

  useEffect(() => {
    getAuth();
  }, []);
  return (
    <>
      {authState?.isAuthenticated && (
        <NavigationContainer>
          <AppDrawerNavigator />
        </NavigationContainer>
      )}
      {!authState.isAuthenticated && (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
};
export default RootNavigator;
