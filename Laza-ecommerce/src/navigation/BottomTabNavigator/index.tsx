import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import DraffScreen from 'screens/Draff';
// constants
import { Colors, IMAGES } from 'styles/themes';
import Screens from 'constants/Screens';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display t switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Home' // The initial route to display. If not initialRouteName, the first screen will be the root screen.
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryColor,
      }}
    >
      <BottomTab.Screen
        name={Screens.Home.name}
        component={DraffScreen}
        options={{
          tabBarLabel: Screens.Home.label,
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconHome}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.WishList.name}
        component={DraffScreen}
        options={{
          tabBarLabel: Screens.WishList.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconHeart}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.Bag.name}
        component={DraffScreen}
        options={{
          tabBarLabel: Screens.Bag.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconBag}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.Wallet.name}
        component={DraffScreen}
        options={{
          tabBarLabel: Screens.Wallet.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconWallet}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
