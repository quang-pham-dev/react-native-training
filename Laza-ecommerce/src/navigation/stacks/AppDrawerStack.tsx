import React from 'react';
import { Image, Text } from 'react-native';

// LIBS
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Context
import ProductsProvider from 'context/ProductsContext';
import BrandsProvider from 'context/BrandsContext';

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
import Metrics from 'themes/Metrics';

// List Tab Bar Icon
const TabBarIcon = {
  [SCREENS_ROUTES.STACK.HOME.name]: IMAGES.iconHome,
  [SCREENS_ROUTES.STACK.WISHLIST.name]: IMAGES.iconHeart,
  [SCREENS_ROUTES.STACK.BAGS.name]: IMAGES.iconBag,
  [SCREENS_ROUTES.STACK.WALLET.name]: IMAGES.iconWallet,
};

// List Tab Bar Label
const TabBarName = {
  [SCREENS_ROUTES.STACK.HOME.name]: SCREENS_ROUTES.STACK.HOME.name,
  [SCREENS_ROUTES.STACK.WISHLIST.name]: SCREENS_ROUTES.STACK.WISHLIST.name,
  [SCREENS_ROUTES.STACK.BAGS.name]: SCREENS_ROUTES.STACK.BAGS.name,
  [SCREENS_ROUTES.STACK.WALLET.name]: SCREENS_ROUTES.STACK.WALLET.name,
};

// Handle render tab bar label
const renderTabBarLabel = (focused: boolean, route: any) => {
  const tintColor = focused ? Colors.primaryColor : Colors.textBlack;
  const styles = { color: tintColor };
  return <Text children={TabBarName[route?.routeName]} style={styles} />;
};

// Handle render tab bar icon
const renderTabBarIcon = (focused: boolean, route: any) => {
  const sizeIcon = focused ? Metrics.icons.custom : Metrics.icons.standard;
  const tintColor = focused ? Colors.primaryColor : Colors.textGray;
  const styles = { tintColor, width: sizeIcon, height: sizeIcon };
  return <Image style={styles} source={TabBarIcon[route?.routeName]} resizeMode='contain' />;
};

// List Tab Bar
const TabBarList = [
  {
    routeName: SCREENS_ROUTES.STACK.HOME.name,
    component: HomeStack,
    options: {
      headerShown: false,
    },
  },
  {
    routeName: SCREENS_ROUTES.STACK.WISHLIST.name,
    component: WishListStack,
    options: {
      headerShown: true,
    },
  },
  {
    routeName: SCREENS_ROUTES.STACK.BAGS.name,
    component: BagsStack,
    options: {
      headerShown: true,
    },
  },
  {
    routeName: SCREENS_ROUTES.STACK.WALLET.name,
    component: WalletStack,
    options: {
      headerShown: true,
    },
  },
];

// Create Tab Navigator
const BottomTab = createBottomTabNavigator();

const AppStackNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={SCREENS_ROUTES.STACK.HOME.name}
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
        },
        headerShown: true,
      }}>
      {TabBarList.map((elem, index) => (
        <BottomTab.Screen
          key={index}
          name={elem.routeName}
          component={elem.component}
          options={{
            headerShown: elem.options.headerShown,
            tabBarActiveTintColor: Colors.primaryColor,
            tabBarLabel: ({ focused }) => renderTabBarLabel(focused, elem),
            tabBarIcon: ({ focused }) => renderTabBarIcon(focused, elem),
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

// Create Drawer navigator
const Drawer = createDrawerNavigator();

function AppDrawerStack() {
  return (
    <ProductsProvider>
      <BrandsProvider>
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
          <Drawer.Screen name={SCREENS_ROUTES.APP_NAVIGATOR.name} component={AppStackNavigator} />
        </Drawer.Navigator>
      </BrandsProvider>
    </ProductsProvider>
  );
}

export default AppDrawerStack;
