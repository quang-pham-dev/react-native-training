import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import DummyScreen from 'screens/Dummy/Dummy';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

const Stack = createNativeStackNavigator();

const BagsStack = () => (
  <Stack.Navigator initialRouteName={SCREENS_ROUTES.BAGS_STACK.BAGS_SCREEN.name}>
    <Stack.Screen
      name={SCREENS_ROUTES.BAGS_STACK.BAGS_SCREEN.name}
      component={DummyScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default BagsStack;
