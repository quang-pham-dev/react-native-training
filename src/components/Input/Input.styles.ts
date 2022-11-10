import styled from 'styled-components/native'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'

// Themes
import {Fonts, Colors} from '@themes'

interface IconWrapperProps {
  mRight?: number
  mBottom?: number
}
interface TextInputProps {
  pLeft?: number
  pRight?: number
}

interface IInputStyled {
  Wrapper: typeof Wrapper
  LabelStyled: typeof LabelStyled
  InputField: typeof InputField
  IconEyeWrapper: typeof IconEyeWrapper
}

const Wrapper = styled(FlexStyled.RowCenterHorizontal)`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.palette.borderGray};
  width: 100%;

  ${props => props.pHorizontal && `padding-horizontal: ${props.pHorizontal}px`};
  ${props => props.pRight && `padding-right: ${props.pRight}px`};
`

const LabelStyled = styled.Text`
 font-size: ${Fonts.size.small}px;
 line-height:  ${Fonts.lineHeight.xs}px
 font-family: ${Fonts.type.interRegular};
 color:${Colors.palette.gray};
`

const InputField = styled.TextInput<TextInputProps>`
  flex: 1;
  padding-left: ${props => (props.pLeft ? props.pLeft : 0)}px;
  padding-right: ${props => (props.pRight ? props.pRight : 5)}px;
  padding-vertical: 15px;
  font-family: ${Fonts.type.interMedium};
  font-size: ${Fonts.size.normal}px;
  line-height: ${Fonts.lineHeight.md}px;
  color: ${Colors.palette.black};
`

const IconEyeWrapper = styled.TouchableOpacity<IconWrapperProps>`
  ${props => props.mRight && `margin-right: ${props.mRight}px;`}
  ${props => props.mBottom && `margin-bottom: ${props.mBottom}px;`}
`

const InputStyled: IInputStyled = {
  Wrapper,
  LabelStyled,
  InputField,
  IconEyeWrapper,
}

export default InputStyled
