import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

// Themes
import {NavigationTheme} from '@themes'

export type NavigatorParamList = {
  // 🔥 Your screens go here
}

// navigation props type
export type NavigationPropsType = NativeStackNavigationProp<NavigatorParamList>

const AppNavigator = () => {
  return <NavigationContainer theme={NavigationTheme} children={undefined} />
}

export default AppNavigator
