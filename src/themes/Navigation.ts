// Libs
import {DefaultTheme} from '@react-navigation/native'

// Themes
import {Colors} from '@themes'

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.whiteNavigation,
  },
}

export default NavigationTheme
