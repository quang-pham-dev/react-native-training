import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stack
import BagsStack from './BagsStack';
import HomeStack from './HomeStack';
import WalletStack from './WalletStack';
import WishListStack from './WishListStack';

// Screens
import SideMenu from 'screens/SideMenu';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

// Themes
import Colors from 'themes/Colors';
import IMAGES from 'themes/Images';

const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={SCREENS_ROUTES.STACK.HOME.name}
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
        },
      }}>
      <BottomTab.Screen
        name={SCREENS_ROUTES.STACK.HOME.name}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: SCREENS_ROUTES.STACK.HOME.name,
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
        name={SCREENS_ROUTES.STACK.WISHLIST.name}
        component={WishListStack}
        options={{
          tabBarLabel: SCREENS_ROUTES.STACK.WISHLIST.name,
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
        name={SCREENS_ROUTES.STACK.BAGS.name}
        component={BagsStack}
        options={{
          tabBarLabel: SCREENS_ROUTES.STACK.BAGS.name,
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
        name={SCREENS_ROUTES.STACK.WALLET.name}
        component={WalletStack}
        options={{
          tabBarLabel: SCREENS_ROUTES.STACK.WALLET.name,
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
};

const Drawer = createDrawerNavigator();

function AppDrawerStack() {
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
      drawerContent={({ navigation }) => <SideMenu navigation={navigation} />}>
      <Drawer.Screen name={SCREENS_ROUTES.APP_NAVIGATOR.name} component={AppNavigator} />
    </Drawer.Navigator>
  );
}

export default AppDrawerStack;
