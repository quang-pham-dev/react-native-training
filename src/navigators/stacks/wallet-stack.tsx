import React from 'react'

// Navigator
import {Stack} from '@navigators'

// Screens
import {Dummy} from '@screens'

// Constants
import {SCREEN_NAMES} from '@constants'

const WalletStack = () => (
  <Stack.Navigator
    initialRouteName={SCREEN_NAMES.DUMMY}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={SCREEN_NAMES.DUMMY} component={Dummy} />
  </Stack.Navigator>
)

export default WalletStack
