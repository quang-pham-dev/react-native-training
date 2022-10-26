import styled from 'styled-components/native'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'

// Themes
import {Metrics, Colors} from '@themes'

export const SearchBarWrapperStyled = styled(FlexStyled.Row)`
  flex: 1;
  height: 50px;
  background-color: ${Colors.palette.lightGray};
  border-radius: ${Metrics.borderRadius.base}px;
`
export const IconWrapperStyled = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: ${Metrics.margin.small}px;
`

export const InputFiledStyled = styled.TextInput`
  flex: 1;
  padding-left: ${Metrics.padding.custom}px;
  padding-right: 20px;
  background-color: 'red';
`
