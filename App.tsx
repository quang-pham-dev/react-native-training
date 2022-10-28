/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react'
import {Alert, StatusBar} from 'react-native'

// Libs
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'

// Navigator
import AppNavigator from '@navigators/app-navigator'

// Components
import {
  ErrorBoundary,
  ErrorMode,
  GestureHandlerRootViewStyled,
} from '@components'

// StorybookUIRoot
import {ToggleStorybook} from './storybook/toggle-storybook'

setJSExceptionHandler((error: Error, isFatal: boolean) => {
  Alert.alert(
    'Unexpected Error Occurred',
    `
        Error ${isFatal ? 'Fatal:' : ''} ${error.name} ${error.message}
        `,
    [{text: 'OK'}],
  )
})

setNativeExceptionHandler((exceptionString: string) => {
  Alert.alert('Unexpected Native Error Occurred', exceptionString, [
    {text: 'OK'},
  ])
}, false)

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ToggleStorybook>
      <GestureHandlerRootViewStyled>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar barStyle="light-content" />
          <ErrorBoundary errorMode={ErrorMode.ALWAYS}>
            <AppNavigator />
          </ErrorBoundary>
        </SafeAreaProvider>
      </GestureHandlerRootViewStyled>
    </ToggleStorybook>
  )
}

export default App
