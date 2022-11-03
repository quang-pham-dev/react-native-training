import React from 'react'

// LIBS
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// Constants
import {SCREEN_NAMES, STACKS_NAMES} from '@constants'

// Themes
import {Colors, Icons} from '@themes'

// Stacks
import {HomeStack, WalletStack, WishlistStack, BagStack} from './stacks'

// Screens
import {Menu} from '@screens'

// Styles
import IconStyled from '@components/Icon/Icon.styles'
import PStyled from '@components/Paragraph/P.styles'

// List Tab Bar Icon
const TabBarIcon: any = {
  [STACKS_NAMES.HOME_STACK]: Icons.home,
  [STACKS_NAMES.WISHLIST_STACK]: Icons.heart,
  [STACKS_NAMES.BAG_STACK]: Icons.bag,
  [STACKS_NAMES.WALLET_STACK]: Icons.wallet,
}

// List Tab Bar Label
const TabBarName: any = {
  [SCREEN_NAMES.HOME]: SCREEN_NAMES.HOME,
  [SCREEN_NAMES.WISHLIST]: SCREEN_NAMES.WISHLIST,
  [SCREEN_NAMES.BAG]: SCREEN_NAMES.BAG,
  [SCREEN_NAMES.WALLET]: SCREEN_NAMES.WALLET,
}

// Handle render tab bar label
const renderTabBarLabel = (
  focused: boolean,
  route: {
    routeName: string
    component?: () => JSX.Element
    options?: {headerShown: boolean}
  },
) => {
  const tintColor = focused ? Colors.palette.primary : Colors.palette.black
  const styles = {color: tintColor}
  return <PStyled.Base children={TabBarName[route?.routeName]} style={styles} />
}

// Handle render tab bar icon
const renderTabBarIcon = (
  focused: boolean,
  route: {
    routeName: string
    component?: () => JSX.Element
    options?: {headerShown: boolean}
  },
) => {
  const sizeIcon = focused ? 25 : 20
  const tintColor = focused ? Colors.palette.primary : Colors.palette.gray
  const styles = {tintColor, width: sizeIcon, height: sizeIcon}
  return (
    <IconStyled
      style={styles}
      source={TabBarIcon[route?.routeName]}
      resizeMode="contain"
    />
  )
}

// List Tab Bar
const TabBarList = [
  {
    routeName: STACKS_NAMES.HOME_STACK,
    component: HomeStack,
    options: {
      headerShown: false,
    },
  },
  {
    routeName: STACKS_NAMES.WISHLIST_STACK,
    component: WishlistStack,
    options: {
      headerShown: false,
    },
  },
  {
    routeName: STACKS_NAMES.BAG_STACK,
    component: BagStack,
    options: {
      headerShown: false,
    },
  },
  {
    routeName: STACKS_NAMES.WALLET_STACK,
    component: WalletStack,
    options: {
      headerShown: false,
    },
  },
]

// Create Tab Navigator
const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.palette.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
        },
        headerShown: false,
      }}>
      {TabBarList.map((elem, index) => (
        <BottomTab.Screen
          key={index}
          name={elem.routeName}
          component={elem.component}
          options={{
            headerShown: elem.options.headerShown,
            tabBarActiveTintColor: Colors.palette.primary,
            tabBarLabel: ({focused}) => renderTabBarLabel(focused, elem),
            tabBarIcon: ({focused}) => renderTabBarIcon(focused, elem),
          }}
        />
      ))}
    </BottomTab.Navigator>
  )
}

// Create Drawer navigator
const Drawer = createDrawerNavigator()

const HomeNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerPosition: 'left',
      drawerStyle: {
        backgroundColor: Colors.background,
        width: '80%',
      },
    }}
    drawerContent={props => <Menu {...props} />}>
    <Drawer.Screen name={'BottomTab'} component={BottomTabNavigator} />
  </Drawer.Navigator>
)

export default HomeNavigator
