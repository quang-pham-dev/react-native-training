import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Navigator
import AuthStack from './stacks/AuthStack';
import AppDrawerStack from './stacks/AppDrawerStack';

// Context
import { AppContext } from 'context/AppContext';
import { INITIALIZE, INITIALIZE_FAILED, INITIALIZE_SUCCESS } from 'context/actions/auth.actions';

// Components
import LoadingIndicator from 'components/LoadingIndicator';

// Constants
import { AUTH_DATA } from 'constants/Common';

// Utils
import { get } from 'utils/localStorage';
import { LOADING_SIZE } from 'types/common/Enums';

const RootNavigator: React.FC = () => {
  // get status authenticated from context
  const { authState, authDispatch } = useContext(AppContext);
  const { isAuthenticated } = authState || {};

  // check authenticated state
  const getAuth = async () => {
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
  }, [authDispatch]);

  return (
    <NavigationContainer fallback={<LoadingIndicator loadingSize={LOADING_SIZE.LARGE} />}>
      {isAuthenticated ? <AppDrawerStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
