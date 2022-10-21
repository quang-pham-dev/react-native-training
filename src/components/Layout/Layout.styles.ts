// libs
import styled from 'styled-components/native'
import {mvs, s} from 'react-native-size-matters/extend'

// themes
import {Colors} from '@themes/Colors'

// constants
import {VERTICAL_SCALE_FACTOR} from '@constants'

// Services
import {convertToPx} from '@services/format'

interface LayoutProps {
  bgColor?: string
  pHorizontal?: number
}

interface LayoutDefaultProps {
  pTop?: number
}

const Default = styled.View<LayoutDefaultProps>`
  flex: 1;
  width: 100%;
  padding-horizontal: ${s(24)}px;
  ${props => props.pTop && `padding-top: ${convertToPx(props.pTop)}`}
`

const Base = styled(Default)<LayoutProps>`
  background-color: ${props =>
    props.bgColor ? props.bgColor : Colors.palette.lightGray};
  ${props =>
    props.pHorizontal && `padding-horizontal : ${s(props.pHorizontal)}px`};
`

const PaddingBottom35 = styled(Base)`
  padding-bottom: ${mvs(35, VERTICAL_SCALE_FACTOR)}px;
`

const PaddingBottom38 = styled(Base)`
  padding-bottom: ${mvs(38, VERTICAL_SCALE_FACTOR)}px;
`
interface ILayoutStyled {
  Default: typeof Default
  Base: typeof Base
  PaddingBottom35: typeof PaddingBottom35
  PaddingBottom38: typeof PaddingBottom38
}

const LayoutStyled: ILayoutStyled = {
  Default,
  Base,
  PaddingBottom35,
  PaddingBottom38,
}

export default LayoutStyled
