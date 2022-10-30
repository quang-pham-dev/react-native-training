// libs
import styled from 'styled-components/native'

// services
import {convertToPx} from '@services/format'
import {isExits} from '@services/helpers'

// themes
import {Metrics, Colors} from '@themes'

// types
import {SpacingProps} from '@prop-types'

interface ViewStyledProps {
  w?: string | number
  h?: string | number
  bRadius?: number
  bgColor?: string
}

interface AbsoluteProps {
  zIndex?: number
  top?: number
  left?: number
  right?: number
  bottom?: number
}

interface KeyboardAvoidingViewProps {
  flex?: number
  width?: string
}

const Default = styled.View<ViewStyledProps>`
  width: ${props => (props.w ? convertToPx(props.w) : '100%')};
  ${props => props.h && `height: ${convertToPx(props.h)};`}
  ${props => props.bgColor && `background-color: ${props.bgColor};`}
  ${props => props.bRadius && `border-radius: ${convertToPx(props.bRadius)};`}
`

const Custom = styled(Default)<SpacingProps>`
  ${props => props.flex && `flex: ${props.flex};`}
  ${props =>
    isExits(props.mVertical) && `margin-vertical: ${props.mVertical}px;`}
  ${props =>
    isExits(props.mHorizontal) && `margin-horizontal: ${props.mHorizontal}px;`}

  ${props =>
    isExits(props.pVertical) && `padding-vertical: ${props.pVertical}px;`}
  ${props =>
    isExits(props.pHorizontal) && `padding-horizontal: ${props.pHorizontal}px;`}

  ${props => isExits(props.pTop) && `padding-top: ${props.pTop}px;`}
  ${props => isExits(props.pLeft) && `padding-left: ${props.pLeft}px;`}
  ${props => isExits(props.pRight) && `padding-right: ${props.pRight}px;`}
  ${props => isExits(props.pBottom) && `padding-bottom: ${props.pBottom}px;`}
  ${props => isExits(props.mTop) && `margin-top: ${props.mTop}px;`}
  ${props => isExits(props.mLeft) && `margin-left: ${props.mLeft}px;`}
  ${props => isExits(props.mRight) && `margin-right: ${props.mRight}px;`}
  ${props => isExits(props.mBottom) && `margin-bottom: ${props.mBottom}px;`}
`

const BorderRadius10 = styled(Custom)`
  border-radius: ${Metrics.borderRadius.base}px;
`

const BorderRadius20 = styled(Custom)`
  border-radius: ${Metrics.borderRadius.large}px;
`

const Absolute = styled(Custom)<AbsoluteProps>`
  position: absolute;
  ${props => props.zIndex && `z-index: ${props.zIndex};`}
  ${props => props.top && `top: ${props.top}px;`}
  ${props => props.left && `left: ${props.left}px;`}
  ${props => props.right && `right: ${props.right}px;`}
  ${props => props.bottom && `bottom: ${props.bottom}px;`}
`

const Divider = styled(Custom)`
  width: 100%;
  height: 1px;
  background-color: ${props =>
    props.bgColor ? props.bgColor : Colors.palette.black};
  margin-vertical: ${props => (props.mVertical >= 0 ? props.mVertical : 0)}px;
`

const KeyboardAvoidingViewStyled = styled.KeyboardAvoidingView<KeyboardAvoidingViewProps>`
  ${props => props.flex && `flex: ${props.flex};`}
  ${props => props.width && `width: ${props.width};`}
`

const ZIndexMinus1 = styled(Custom)`
  z-index: -1;
`

const ZIndexMinus2 = styled(Custom)`
  z-index: -2;
`

const ZIndexMinus3 = styled(Custom)`
  z-index: -3;
`

const ScrollViewWrapper = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))``

const OutLine = styled(Custom)`
  width: 100%;
  border: ${props => props.border};
  border-radius: ${Metrics.borderRadius.medium}px;
  background-color: ${props => props.bgColor || Colors.palette.white};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'space-between'};
`

interface IViewStyled {
  Default: typeof Default
  Custom: typeof Custom
  Border10: typeof BorderRadius10
  BorderRadius20: typeof BorderRadius20
  Absolute: typeof Absolute
  Divider: typeof Divider
  KeyboardAvoidingViewStyled: typeof KeyboardAvoidingViewStyled
  ZIndexMinus1: typeof ZIndexMinus1
  ZIndexMinus2: typeof ZIndexMinus2
  ZIndexMinus3: typeof ZIndexMinus3
  ScrollViewWrapper: typeof ScrollViewWrapper
  OutLine: typeof OutLine
}

const ViewStyled: IViewStyled = {
  Default,
  Custom,
  Border10: BorderRadius10,
  BorderRadius20,
  Absolute,
  Divider,
  KeyboardAvoidingViewStyled,
  ZIndexMinus1,
  ZIndexMinus2,
  ZIndexMinus3,
  ScrollViewWrapper,
  OutLine,
}

export default ViewStyled
