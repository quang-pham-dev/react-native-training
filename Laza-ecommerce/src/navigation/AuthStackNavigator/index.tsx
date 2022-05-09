import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// Components
import DraffScreen from 'screens/Draff';
// Constants
import Screens from 'constants/Screens';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name={Screens.Login.name}
          component={DraffScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name={Screens.GetStarted.name}
          component={DraffScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
