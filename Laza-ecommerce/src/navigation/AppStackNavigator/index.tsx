import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Constants
import Screens from 'constants/Screens';
// Screens
import HomeScreen from 'screens/Home';
import DraffScreen from 'screens/Draff';
import BottomTabNavigator from 'navigation/BottomTabNavigator';

const AppStack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName={Screens.Root.name}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name={Screens.Root.name} component={BottomTabNavigator} />
      <AppStack.Screen name={Screens.Home.name} component={HomeScreen} />
      <AppStack.Screen name={Screens.WishList.name} component={DraffScreen} />
      <AppStack.Screen name={Screens.Bag.name} component={DraffScreen} />
      <AppStack.Screen name={Screens.Wallet.name} component={DraffScreen} />
    </AppStack.Navigator>
  );
}
