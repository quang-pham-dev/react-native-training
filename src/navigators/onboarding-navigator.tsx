import React from 'react'

// Stack
import {Stack} from './index'

// Constants
import {SCREEN_NAMES} from '@constants'

// Screens
import {GetStarted} from '@screens'

// Themes
import {Colors} from '@themes'

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.GET_STARTED}
      screenOptions={{
        headerShadowVisible: false,
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: Colors.palette.black,
        headerBackVisible: false,
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: Colors.palette.transparent,
        },
      }}>
      <Stack.Screen name={SCREEN_NAMES.GET_STARTED} component={GetStarted} />
    </Stack.Navigator>
  )
}

export default OnboardingNavigator
