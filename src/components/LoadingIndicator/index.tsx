import React from 'react'
import {ActivityIndicator} from 'react-native'

// Styles
import ViewStyled from '@components/View/View.styles'

// Themes
import {Colors} from '@themes'

export enum LoadingSize {
  SMALL = 'small',
  LARGE = 'large',
}

type LoadingIndicatorProps = {
  size?: LoadingSize | undefined
  color?: string
}

const LoadingIndicator = ({
  size,
  color = Colors.palette.white,
}: LoadingIndicatorProps) => (
  <ViewStyled.Custom>
    <ActivityIndicator size={size} color={color} />
  </ViewStyled.Custom>
)

export default LoadingIndicator
