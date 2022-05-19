import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Components
import GetStartedScreen from 'screens/GetStarted';
import SignInScreen from 'screens/SignIn';
// Constants
import Screens from 'constants/Screens';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='OnBoarding'>
      <AuthStack.Screen name={Screens.GetStarted.name} component={GetStartedScreen} />
      <AuthStack.Screen name={Screens.SignIn.name} component={SignInScreen} />
    </AuthStack.Navigator>
  );
}
