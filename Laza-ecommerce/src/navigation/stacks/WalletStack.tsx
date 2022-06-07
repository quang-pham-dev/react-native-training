import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import DummyScreen from 'screens/Dummy/Dummy';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

const Stack = createNativeStackNavigator();

const WalletStack = () => (
  <Stack.Navigator initialRouteName={SCREENS_ROUTES.WALLET_STACK.WALLET_SCREEN.name}>
    <Stack.Screen
      name={SCREENS_ROUTES.WALLET_STACK.WALLET_SCREEN.name}
      component={DummyScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default WalletStack;
