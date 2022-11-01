import React from 'react'

// Navigator
import {Stack} from '@navigators'

// Screens
import {Home} from '@screens'

// Constants
import {SCREEN_NAMES} from '@constants'

const BagStack = () => (
  <Stack.Navigator
    initialRouteName={SCREEN_NAMES.HOME}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={SCREEN_NAMES.HOME} component={Home} />
  </Stack.Navigator>
)

export default BagStack
