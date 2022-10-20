import {DefaultTheme} from '@react-navigation/native'

import {Colors} from './Colors'

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.whiteNavigation,
  },
}

export default NavigationTheme
