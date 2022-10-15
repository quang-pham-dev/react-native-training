/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import ErrorBoundary, {ErrorMode} from '@components/ErrorBoundary'
import AppNavigator from '@navigators/AppNavigator'
import React, {useEffect} from 'react'
import {StatusBar} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'

import SplashScreen from 'react-native-splash-screen'
import {ToggleStorybook} from './storybook/toggle-storybook'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ToggleStorybook>
      <GestureHandlerRootView>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar barStyle="light-content" />
          <ErrorBoundary errorMode={ErrorMode.ALWAYS}>
            <AppNavigator />
          </ErrorBoundary>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ToggleStorybook>
  )
}

export default App
