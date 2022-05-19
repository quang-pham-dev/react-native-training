import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Constants
import Screens from 'constants/Screens';
// Navigator
import BottomTabNavigator from 'navigation/AppStackNavigator/BottomTabNavigator';
import ProductDetail from 'screens/ProductDetail';
import BrandDetailScreen from 'screens/BrandDetail';

const AppStack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName={Screens.Root.name}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name={Screens.Root.name} component={BottomTabNavigator} />
      <AppStack.Screen name={Screens.BrandDetail.name} component={BrandDetailScreen} />
      <AppStack.Screen name={Screens.ProductDetail.name} component={ProductDetail} />
    </AppStack.Navigator>
  );
}
