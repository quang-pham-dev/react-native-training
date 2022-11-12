/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect, useState} from 'react'
import {Alert, AppState, StatusBar} from 'react-native'

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

// Contexts
import {AuthContextProvider} from '@contexts'

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

// Debugging
import {connectToDevTools} from 'react-devtools-core'

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

if (__DEV__) {
  require('react-native-performance-flipper-reporter').setupDefaultFlipperReporter()

  connectToDevTools({
    host: 'localhost',
    port: 8097,
  })
}

enum AppStateEvent {
  CHANGE = 'change',
  MEMORY_WARNING = 'memoryWarning',
  BLUR = 'blur',
  FOCUS = 'focus',
}

const App = () => {
  const [isMemoryWarning, setMemoryWarning] = useState(false)

  useEffect(() => {
    // listening state app
    const appStateListener = AppState.addEventListener(
      AppStateEvent.MEMORY_WARNING,
      () => {
        setMemoryWarning(true)
      },
    )

    SplashScreen.hide()
    // Clean up
    return () => {
      appStateListener?.remove()
    }
  }, [])

  if (isMemoryWarning) {
    Alert.alert('Warning!', 'Device running leak memory!')
  }

  return (
    <ToggleStorybook>
      <GestureHandlerRootViewStyled>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar barStyle="light-content" />
          <ErrorBoundary errorMode={ErrorMode.ALWAYS}>
            <AuthContextProvider>
              <AppNavigator />
            </AuthContextProvider>
          </ErrorBoundary>
        </SafeAreaProvider>
      </GestureHandlerRootViewStyled>
    </ToggleStorybook>
  )
}

export default App
