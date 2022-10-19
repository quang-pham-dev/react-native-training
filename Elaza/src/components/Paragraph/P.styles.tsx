// Libs
import styled from 'styled-components/native'

// Services
import {convertToPx, getType} from '@services'
import {Fonts, Colors} from '@themes'

export interface ParagraphStyledProps {
  type: string
  color?: string
  fontFamily?: string
  textTransform?: string
  fontSize?: number
  lineHeight?: number
  pHorizontal?: number
  mBottom?: number
  mLeft?: number
  mTop?: number
  mRight?: number
}

interface ParagraphData {
  Base: typeof P
  Center: typeof Center
  Right: typeof Right
  TFamilyRegular: typeof TFamilyRegular
  TFamilySemiBold: typeof TFamilySemiBold
  TFamilyBold: typeof TFamilyBold
  ErrorMessage: typeof ErrorMessage
}

const metricsType = 'paragraph'

const P = styled.Text<ParagraphStyledProps>`
  text-align: left;
  ${props =>
    getType(props.type, metricsType) &&
    `color: ${getType(props.type, metricsType).color};`}
  ${props =>
    getType(props.type, metricsType) &&
    `font-size: ${convertToPx(getType(props.type, metricsType).fontSize)};`}
  ${props =>
    getType(props.type, metricsType) &&
    `line-height: ${convertToPx(getType(props.type, metricsType).lineHeight)};`}
  ${props =>
    getType(props.type, metricsType) &&
    `font-family: ${getType(props.type, metricsType).fontFamily};`}
  ${props =>
    props.pHorizontal &&
    `padding-horizontal: ${convertToPx(props.pHorizontal)};`}
  ${props => props.textTransform && `text-transform: ${props.textTransform}`}
  ${props => props.mBottom && `margin-bottom: ${convertToPx(props.mBottom)}`}
  ${props => props.mLeft && `margin-left: ${convertToPx(props.mLeft)}`}
  ${props => props.mRight && `margin-right: ${convertToPx(props.mRight)}`}
  ${props => props.mTop && `margin-top: ${convertToPx(props.mTop)}`}
`
// Align text: left (default) - center - right
const Center = styled(P)`
  text-align: center;
`
const Right = styled(P)`
  text-align: right;
`

// Font family: base - bold - medium
const TFamilyRegular = styled(P)`
  font-family: ${Fonts.type.interRegular};
`
const TFamilySemiBold = styled(P)`
  font-family: ${Fonts.type.interMedium};
`
const TFamilyBold = styled(P)`
  font-family: ${Fonts.type.interSemiBold};
`

const ErrorMessage = styled(TFamilyRegular)`
  color: ${Colors.error};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
`

const PStyled: ParagraphData = {
  Base: P,
  Center,
  Right,
  TFamilyRegular,
  TFamilySemiBold,
  TFamilyBold,
  ErrorMessage,
}

export default PStyled
