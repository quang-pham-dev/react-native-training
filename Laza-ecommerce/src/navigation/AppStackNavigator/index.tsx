import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// BottomTabNavigator is the main navigation component
import BottomTabNavigator from 'navigation/BottomTabNavigator';
// import AppDrawerNavigator from 'navigation/AppDrawerNavigator';

export default function AppStack() {
  return (
    <NavigationContainer>
      {/* <AppDrawerNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
