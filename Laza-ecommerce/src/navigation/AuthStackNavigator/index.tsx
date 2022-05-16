import React from 'react';
// Components
import GetStartedScreen from 'screens/GetStarted';
import SignInScreen from 'screens/SignIn';
// Constants
import Screens from 'constants/Screens';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  const isFirstTime = false;
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      {isFirstTime && (
        <AuthStack.Screen name={Screens.GetStarted.name} component={GetStartedScreen} />
      )}
      <AuthStack.Screen name={Screens.SignIn.name} component={SignInScreen} />
    </AuthStack.Navigator>
  );
}
