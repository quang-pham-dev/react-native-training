import React, {PropsWithChildren} from 'react'

import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated'

import {AnimatedKeyboardWrapperStyled} from './AnimatedKeyboard.styles'

const AnimatedKeyboard = ({children}: PropsWithChildren) => {
  const keyboard = useAnimatedKeyboard()
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -keyboard.height.value}],
    }
  })

  return (
    <AnimatedKeyboardWrapperStyled>
      <Animated.View style={[animatedStyle]}>{children}</Animated.View>
    </AnimatedKeyboardWrapperStyled>
  )
}

export default AnimatedKeyboard
