import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from 'screens/Home';
import ProductDetail from 'screens/ProductDetail';
import BrandDetail from 'screens/BrandDetail';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName={SCREENS_ROUTES.HOME_STACK.HOME_SCREEN.name}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={SCREENS_ROUTES.HOME_STACK.HOME_SCREEN.name}
      component={HomeScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name={SCREENS_ROUTES.HOME_STACK.PRODUCT_DETAIL_SCREEN.name}
      component={ProductDetail}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name={SCREENS_ROUTES.HOME_STACK.BRAND_DETAI_SCREENL.name}
      component={BrandDetail}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
