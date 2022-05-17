import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Navigator
import AppStackNavigator from 'navigation/AppStackNavigator';
// Screens
import SideMenu from 'screens/SideMenu';
// Theme
import { Colors } from 'styles/themes';
// Constants
import Screens from 'constants/Screens';

const Drawer = createDrawerNavigator();

function AppDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerStyle: {
          backgroundColor: Colors.primaryBackground,
          width: '80%',
        },
      }}
      drawerContent={({ navigation }) => <SideMenu navigation={navigation} />}
    >
      <Drawer.Screen name={Screens.App.name} component={AppStackNavigator} />
    </Drawer.Navigator>
  );
}

export default AppDrawerNavigator;
