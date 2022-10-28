import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

// Navigator
import OnboardingNavigator from './onboarding-navigator'
import HomeNavigator from './home-navigator'

// Themes
import {NavigationTheme} from '@themes'

export type NavigatorParamList = {
  GetStarted: undefined
  Login: undefined
  // 🔥 Your screens go here
}

// navigation props type
export type NavigationPropsType = NativeStackNavigationProp<NavigatorParamList>

const AppNavigator = () => {
  const isAuthenticated = false
  return (
    <NavigationContainer theme={NavigationTheme}>
      {isAuthenticated ? <HomeNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator
