import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Navigator
import AppStackNavigator from 'navigation/AppStackNavigator';
// Screens
import SideMenu from 'screens/SideMenu';

import { Colors } from 'styles/themes';

const Drawer = createDrawerNavigator();

function AppDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerStyle: {
          backgroundColor: Colors.primaryBackground,
          width: 300,
        },
      }}
      drawerContent={({ navigation }) => <SideMenu navigation={navigation} />}
    >
      <Drawer.Screen name={'App'} component={AppStackNavigator} />
    </Drawer.Navigator>
  );
}

export default AppDrawerNavigator;
