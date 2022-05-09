import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// Components
import GetStartedScreen from 'screens/GetStarted';
import SignInScreen from 'screens/SignIn';
// Constants
import Screens from 'constants/Screens';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name={Screens.GetStarted.name}
          component={GetStartedScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name={Screens.SignIn.name}
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
