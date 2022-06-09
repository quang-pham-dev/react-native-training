import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigator
import AuthStack from './stacks/AuthStack';
import AppDrawerStack from './stacks/AppDrawerStack';

// Context
import { AuthenticationContext } from 'context/AuthContext';
import { INITIALIZE, INITIALIZE_FAILED, INITIALIZE_SUCCESS } from 'context/actions/auth';

// Components
import LoadingIndicator from 'components/LoadingIndicator';

// Constants
import { AUTH_DATA } from 'constants/Common';
import { SCREENS_ROUTES } from 'constants/Screens';

// Utils
import { get } from 'utils/localStorage';

const RootStack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  // get status authenticated from context
  const { authState, authDispatch } = useContext(AuthenticationContext);

  const { isAuthenticated } = authState || {};

  // check authenticated state
  const getAuth = async (): Promise<void> => {
    authDispatch({ type: INITIALIZE });
    try {
      // get auth data from local storage
      const authData = await get(AUTH_DATA);
      if (authData) {
        const { access_token } = JSON.parse(authData);
        const { user } = JSON.parse(authData);
        authDispatch({
          type: INITIALIZE_SUCCESS,
          payload: {
            user,
            access_token,
          },
        });
      }
    } catch (error) {
      authDispatch({ type: INITIALIZE_FAILED, payload: error });
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  // Render stack navigator
  const renderStack = () => {
    if (isAuthenticated) {
      return <RootStack.Screen component={AppDrawerStack} name={SCREENS_ROUTES.STACK.APP.name} />;
    }
    return <RootStack.Screen component={AuthStack} name={SCREENS_ROUTES.STACK.AUTH.name} />;
  };

  return (
    <NavigationContainer fallback={<LoadingIndicator />}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {renderStack()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
