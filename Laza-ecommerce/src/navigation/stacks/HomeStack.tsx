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
    initialRouteName={SCREENS_ROUTES.APP.HOME.name}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={SCREENS_ROUTES.APP.HOME.name}
      component={HomeScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name={SCREENS_ROUTES.APP.PRODUCT_DETAIL.name}
      component={ProductDetail}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name={SCREENS_ROUTES.APP.BRAND_DETAIL.name}
      component={BrandDetail}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
