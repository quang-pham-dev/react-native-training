import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import GetStartedScreen from 'screens/GetStarted';
import SignInScreen from 'screens/SignIn';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={SCREENS_ROUTES.AUTH.GET_STARTED.name}>
    <Stack.Screen name={SCREENS_ROUTES.AUTH.SIGN_IN.name} component={SignInScreen} />
    <Stack.Screen name={SCREENS_ROUTES.AUTH.GET_STARTED.name} component={GetStartedScreen} />
  </Stack.Navigator>
);

export default AuthStack;
