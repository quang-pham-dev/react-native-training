// Libs
import styled from 'styled-components/native'
import {mvs} from 'react-native-size-matters/extend'

// Themes
import {Colors, Fonts} from '@themes'

// Constants
import {VERTICAL_SCALE_FACTOR} from '@constants'

export const TruncatedTextStyled = styled.Text`
  color: ${Colors.palette.gray};
  font-size: ${Fonts.size.normal}px;
  font-family: ${Fonts.type.interRegular};
  line-height: ${mvs(21, VERTICAL_SCALE_FACTOR)}px;
`
export const TruncatedTextBoldStyled = styled.Text`
  color: ${Colors.palette.black};
  font-size: ${Fonts.size.normal}px;
  font-family: ${Fonts.type.interSemiBold};
  line-height: ${mvs(21, VERTICAL_SCALE_FACTOR)}px;
`
