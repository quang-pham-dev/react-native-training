import React from 'react'

// Navigation
import {Stack} from './index'

// Screens
import {Home} from '@screens'

// Constants
import {SCREEN_NAMES} from '@constants'

// Themes
import {Colors} from '@themes'

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.HOME}
      screenOptions={{
        headerShadowVisible: true,
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.palette.black,
        headerBackVisible: true,
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerStyle: {
          backgroundColor: Colors.palette.transparent,
        },
      }}>
      <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
    </Stack.Navigator>
  )
}
export default HomeNavigator
