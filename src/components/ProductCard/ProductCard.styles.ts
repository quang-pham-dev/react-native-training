import styled from 'styled-components/native'
import {s} from 'react-native-size-matters/extend'

// Themes
import {Colors, Metrics} from '@themes'

export const ProductCardWrapperStyled = styled.Pressable`
  width: ${s(170)}px
  heigh: ${s(260)}px;
  justify-content: center;
  margin-bottom: ${Metrics.margin.medium}px;
  background-color: ${Colors.background};
`
export const ImageWrapperStyled = styled.View`
  border-radius: ${Metrics.borderRadius.medium}px;
  margin-bottom: ${Metrics.margin.tiny}px;
  overflow: hidden;
`

export const IconHeartWrapperStyled = styled.Pressable`
  position: absolute;
  top: 14px;
  right: 15px;
  z-index: 1;
`
