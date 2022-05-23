import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import DummyScreen from 'screens/Dummy';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

const Stack = createNativeStackNavigator();

const WishListStack = () => (
  <Stack.Navigator initialRouteName={SCREENS_ROUTES.WISHLIST_STACK.WISHLIST_SCREEN.name}>
    <Stack.Screen
      name={SCREENS_ROUTES.WISHLIST_STACK.WISHLIST_SCREEN.name}
      component={DummyScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default WishListStack;
