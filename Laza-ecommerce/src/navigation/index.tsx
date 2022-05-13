import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Hooks
import useAuth from 'hooks/useAuth';
// Navigator
import AppDrawerNavigator from './AppDrawerNavigator';
import AuthNavigator from './AuthStackNavigator';

const RootNavigator: React.FC = () => {
  // get status authenticated from context
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>{isAuthenticated ? <AppDrawerNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};
export default RootNavigator;
