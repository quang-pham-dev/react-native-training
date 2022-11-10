import React, {PropsWithChildren} from 'react'

// Libs
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated'

// styles
import ViewStyled from '@components/View/View.styles'

const AnimatedKeyboard = ({children}: PropsWithChildren) => {
  const keyboard = useAnimatedKeyboard()
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -keyboard.height.value}],
    }
  })

  const flex = {flex: 1}

  return (
    <ViewStyled.ScrollViewWrapper>
      <Animated.View style={[animatedStyle, flex]}>{children}</Animated.View>
    </ViewStyled.ScrollViewWrapper>
  )
}

export default AnimatedKeyboard
