import {NavigationContainer} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import React from 'react'

export type NavigatorParamList = {
  // 🔥 Your screens go here
}

// navigation props type
export type NavigationPropsType = NativeStackNavigationProp<NavigatorParamList>

const AppNavigator = () => {
  return <NavigationContainer children={undefined} />
}

export default AppNavigator
