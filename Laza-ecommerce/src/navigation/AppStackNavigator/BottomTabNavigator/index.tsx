import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import DummyScreen from 'screens/Dummy';
import HomeScreen from 'screens/Home';
// constants
import Screens from 'constants/Screens';
// Themes
import { Colors, IMAGES } from 'styles/themes';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display t switch screens.
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Home' // The initial route to display. If not initialRouteName, the first screen will be the root screen.
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryColor,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
        },
      }}
    >
      <BottomTab.Screen
        name={Screens.Home.name}
        component={HomeScreen}
        options={{
          tabBarLabel: Screens.Home.label,
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <Image
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? Colors.primaryColor : color,
                }}
                source={IMAGES.iconHome}
                resizeMode='contain'
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.WishList.name}
        component={DummyScreen}
        options={{
          tabBarLabel: Screens.WishList.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconHeart}
                resizeMode='contain'
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.Bag.name}
        component={DummyScreen}
        options={{
          tabBarLabel: Screens.Bag.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconBag}
                resizeMode='contain'
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.Wallet.name}
        component={DummyScreen}
        options={{
          tabBarLabel: Screens.Wallet.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconWallet}
                resizeMode='contain'
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
